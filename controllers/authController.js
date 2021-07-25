const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = catchAsync(async (req, res, next) => {
    console.log(req.body)
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    const token = signToken(newUser._id);
    res.status(201).json({
        status: "success",
        token,
        data: {
            user: newUser
        }
    })
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);
    // 1) Check if email && password exist in req.body
    if(!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists in database and password is correct
    const user = await User.findOne({ email }).select('+password');
    const correct = await user.correctPassword(password,user.password);
    console.log(correct);
    if(!user || !correct) {
        return next(new AppError('Incorrect email or passowrd!', 401))
    }
    // 3) If everything is fine, send jwt token to client
    const token = signToken(user._id);
    res.status(200).json({
        status: "success",
        token
    });
});