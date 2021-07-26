const Credential = require("../models/credentialModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.addCredential = catchAsync(async (req, res, next) => {
  const credential = await Credential.create({
    loginId: req.body.loginId,
    password: req.body.password,
    websiteId: req.body.websiteId,
    userId: req.user._id,
  });
  res.status(201).json({
    status: "success",
    data: {
      credential,
    },
  });
});

exports.getCredentialsByID = catchAsync(async (req, res, next) => {
  const credential = await Credential.findById(req.params.id).populate({
    path: "userId websiteId",
    select: "-__v",
  });
  console.log(credential);
  if (!credential) {
    return next(new AppError("No credential found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      credential,
    },
  });
});

exports.updateCredentials = catchAsync(async (req, res, next) => {
  const updatedCredential = await Credential.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedCredential) {
    return next(new AppError("No credential found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      updatedCredential,
    },
  });
});

exports.deleteCredentials = catchAsync(async (req, res, next) => {
  const deletedCredential = await Credential.findByIdAndDelete(req.params.id);
  if (!deletedCredential) {
    return next(new AppError("No credential found with this ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
