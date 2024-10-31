const Credential = require("../models/credentialModel");
const Website = require("../models/websiteModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if(allowedFields.includes(el)){
      newObj[el] = obj[el];
    }
  })
  return newObj;
}

exports.addCredential = catchAsync(async (req, res, next) => {
  console.log(req.body);
  console.log("will encrypt the password before storing in DB");
  const credential = await Credential.create({
    loginId: req.body.loginId,
    password: req.body.password,
    websiteId: req.body.websiteId,
    userId: req.user._id,
  });
  const website = await Website.findById(req.body.websiteId);
  console.log(credential);
  res.status(201).json({
    status: "success",
    data: {
      credential,
      website
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
  const filteredBody = filterObj(req.body, 'loginId', 'password');
  const updatedCredential = await Credential.findByIdAndUpdate(
    req.params.id,
    filteredBody,
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
