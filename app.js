const path = require("path");
const express = require("express");

const csrf = require("csurf");

const expressSession = require('express-session')
const createSessionConfig = require('./config/session')

const db = require("./data/database");
const addCsrfTokenMiddlware = require('./middlewares/csrf-token')
const authRoutes = require("./routes/auth.routes"); //routes related to authentification

const errorHandlerMiddleware = require('./middlewares/error-handler')

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//creates sessions
const sessionConfig = createSessionConfig()
app.use(expressSession(sessionConfig))

//protection against csrf attacks
app.use(csrf());
app.use(addCsrfTokenMiddlware) //  middleware to add csrf token to locals 


app.use(authRoutes);


app.use(errorHandlerMiddleware);
db.conectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("failed to connect to the database!");
    console.log(error);
  });
