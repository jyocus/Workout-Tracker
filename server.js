const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const port = process.env.PORT || 3000;

//creating express instance
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongodb+srv://jyocus:password@cluster0.bpq4t.mongodb.net/workoutTracker?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html-routes.js"));

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});