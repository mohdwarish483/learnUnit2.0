// normal imports from packages
// var express = require('express');

// var app = express();

// if package.json type = module then Ecma6 import export
import express from "express";
import { errorMiddleware } from "./middlewares/ErrorMiddleware.js";
import cookieParser from "cookie-parser";
// creates an express application

const app = express();

// using middlewares
// app.use(cookieParser)
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
// importing and using routes
import course from "./routes/CourseRoutes.js";
app.use("/api/v1", course);

import users from "./routes/UserRoutes.js";

app.use("/api/v1", users);

app.use(errorMiddleware);

export default app;
