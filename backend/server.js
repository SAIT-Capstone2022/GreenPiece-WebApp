const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const passwordResetRoutes = require("./routes/passwordReset");
const retrieveDataRouter = require("./routes/retrieveData");
const { sensorData } = require('./models/sensorData');
const { User } = require('./models/user');
const { date } = require('joi');
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
setInterval(() => {
  User.find({}, (err, users) => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    const emails = users.map(({email}) => email);
    console.log(emails);
    const sensorDataPoints = emails.map((email) => {
      return {
        email, 
        temperature: getRandomInt(10, 45),
        humidity: getRandomInt(0, 100),
        moistureLevel: getRandomInt(0, 100),
        date: "tuesday",
        time: new Date().getMinutes()
      }
    })
    sensorData.insertMany(sensorDataPoints);
    console.log("Created new sensordata")
  })
}, 10000);

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

