const express = require("express");
const cookieParser = require('cookie-parser')
const globalErrorHandler = require("./controllers/errorController");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use((req,res,next) => {
    console.log(1,res.cookies);
    next();
})

const userRouter = require("./routes/userRoutes");
const websiteRouter = require("./routes/websiteRoutes");
const credentialRouter = require("./routes/credentialRoutes");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  console.log('call from client')
  res.send({express: 'Backend Connected!!'});
})

app.use("/api/v1/users", userRouter);
app.use("/api/v1/websites", websiteRouter);
app.use("/api/v1/credentials", credentialRouter);

app.use(globalErrorHandler);

module.exports = app;
