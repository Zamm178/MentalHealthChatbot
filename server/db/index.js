const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/mental-health-bot',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.error("Connection error", err.message);
    }
)

const db = mongoose.connection

module.exports = db
