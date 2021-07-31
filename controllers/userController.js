const User = require("../models/userModel");
const Credential = require("../models/credentialModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if(allowedFields.includes(el)){
      newObj[el] = obj[el];
    }
  })
  return newObj;
}

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if(req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password update! Please use /updatepassword',400));
  }
  const filteredBody = filterObj(req.body, 'name', 'passCode');
  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    status: "success",
    data: {
      user
    }
  });
})

exports.myCredentials = catchAsync(async(req, res, next) => {
  const myCredentials = await Credential.find({userId: req.user._id}).select('_id website').populate({
    path: 'website',
    select: 'name link'
  });
  res.status(200).json({
    status: "success",
    data: {
      myCredentials
    }
  })
})

exports.addUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

exports.getUserByID = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
