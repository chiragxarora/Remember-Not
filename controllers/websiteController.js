const Website = require("../models/websiteModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllSites = catchAsync(async (req, res, next) => {
  const websites = await Website.find();
  res.status(200).json({
    status: "success",
    results: websites.length,
    data: {
      websites,
    },
  });
});

exports.addSite = catchAsync(async (req, res, next) => {
  const newSite = await Website.create({
    name: req.body.name,
    link: req.body.link,
  });
  res.status(201).json({
    status: "success",
    data: {
      newSite,
    },
  });
});

exports.getSiteByID = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

exports.updateSite = catchAsync(async (req, res, next) => {
  const updatedSite = await Website.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedSite) {
    return next(
      new AppError("No website with given id exists in database"),
      400
    );
  }
  res.status(200).json({
    status: "success",
    data: {
      updatedSite,
    },
  });
});

exports.deleteSite = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
