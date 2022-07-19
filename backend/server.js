const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const passwordResetRoutes = require("./routes/passwordReset");
const retrieveDataRouter = require("./routes/retrieveData")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database now connected successfully");
})

// Routes
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/password-reset', passwordResetRoutes);
app.use('/data', retrieveDataRouter);

app.listen(port, () => {
  console.log('Server is running');
});

