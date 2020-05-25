const express = require("express");
const router = express.Router();
var axios = require("axios");
const weather = require("../public/scripts/weather");
const weekObj = require("../public/scripts/date");
require("dotenv").config();
const key = process.env.WEATHER_KEY;
let zip = "";
let weatherForecast = "";
let days = [];

const week=weekObj.getWeek()
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
const getWeather=()=>{ 
      for (i = 0; i < weatherForecast.data.length; i++) {
        const weatherCode = weatherForecast.data[i].weather.code;
        let day =weather.weatherBackground(weatherCode)
        days.push(day); 
        console.log(weatherCode)       
      }
}
//  / Get home page
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const name = req.cookies.username;
    zip = req.cookies.zip;
    await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zip}&country=US&key=${key}&units=i}`
      )
      .then(function (res) {
        return (weatherForecast = res.data);
      });  
    getWeather()
    if (name) {
      return res.render("home", { name, zip, weatherForecast, days, week});
    } else {
      res.redirect("/hello");
    }
  })
);
router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});
router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.cookie("zip", req.body.zip);
  res.redirect("/");
});

//  /weather gets 7day forecast
router.get("/seven-day",
  asyncHandler(async (req, res) => {
    const name = req.cookies.username;
    zip = req.cookies.zip;
    await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zip}&country=US&key=${key}&units=I`
      )
      .then(function (res) {
        console.log(res.data) 
        return (weatherForecast = res.data);
      }); 
    getWeather()
    if (name) {
      return res.render("seven-day", { name, zip, weatherForecast, days, week});
    } else {
      res.redirect("/hello");
    }
  }));
//  todo
router.get("/moon-cycle", (req, res) => {
  res.render("moon-cycle");
});

module.exports = router;
