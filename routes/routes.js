const express = require("express");
const router = express.Router();
var axios = require("axios");
const weather = require("../public/scripts/weather")
require('dotenv').config()
const key = process.env.WEATHER_KEY

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}


//  / Get home page

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const name = req.cookies.username;
    const zip = req.cookies.zip;
    // const backgroundColor=''  
    const textColor=''
    const imgPath=''
    console.log(process.env.WEATHER_KEY)
     await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zip}&country=US&key=${key}&units=i}`
      )
      .then(function (res) {
        return weatherForecast = res.data;
      });
      weather.weatherBackground(200)
     await axios
      .get(
        `https://gnews.io/api/v3/topics/nation?q=example&token=${newsKey}&lang=en&country=us}`
      )
      .then(function (res) {
        return news = res.data.articles;
      });
    if (name) {
      console.log(news[0]);
      return res.render("home", { name, zip, weatherForecast });
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
router.get("/seven-day", (req, res) => {
  res.render("seven-day");
});
//  todo
router.get("/moon", (req, res) => {
  res.render("moon");
});


module.exports = router;
