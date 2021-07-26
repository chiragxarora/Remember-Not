const express = require('express');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

const userRouter = require('./routes/userRoutes');
const websiteRouter = require('./routes/websiteRoutes');
const credentialRouter = require('./routes/credentialRoutes');
 
app.use('/api/v1/users', userRouter);
app.use('/api/v1/websites', websiteRouter);
app.use('/api/v1/credentials', credentialRouter);

app.use(globalErrorHandler);

module.exports = app;