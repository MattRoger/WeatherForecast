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
const week = weekObj.getWeek();

/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @return {string} A good string
 *
 */
const asyncHandler = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

const getWeather = () => {
  if (weatherForecast) {
    for (i = 0; i < weatherForecast.data.length; i++) {
      const weatherCode = weatherForecast.data[i].weather.code;
      let day = weather.weatherBackground(weatherCode);
      days.push(day);
    }
  }
};

const digitsCount = (n) => {
  let count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  return count;
};

//  / Get home page
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const name = req.cookies.username;
    zip = req.cookies.zip;
    await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zip}&country=US&key=${key}&units=i`
      )
      .then(function (res) {
        return (weatherForecast = res.data);
      });
    getWeather();
    if (name) {
      if (weatherForecast) {
        return res.render("home", { name, zip, weatherForecast, days, week });
      } else {
        res.redirect("/error");
      }
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
  const zipCheck = digitsCount(req.body.zip);
  if (!req.body.username || !req.body.zip) {
    const errorMessage = "Please Fill in the Blanks";
    res.render("hello", { errorMessage });
  } else if (isNaN(req.body.zip) || zipCheck != 5) {
    const errorMessage = "Please Fill Enter A Valid Zip Code";
    res.render("hello", { errorMessage });
  } else if (req.body.username.length > 15) {
    const errorMessage = "Name Is too Long!";
    res.render("hello", { errorMessage });
  } else {
    res.cookie("username", req.body.username);
    res.cookie("zip", req.body.zip);
    res.redirect("/");
  }
});
router.post("/", (req, res) => {
  const zipCheck = digitsCount(req.body.zip);
  if (isNaN(req.body.zip) || zipCheck != 5) {
    const errorMessage = "Please Fill Enter A Valid Zip Code";
    res.render("error", { errorMessage });
  } else {
    res.cookie("zip", req.body.zip);
    res.redirect("/");
  }
});
router.post("/error", (req, res) => {
  const zipCheck = digitsCount(req.body.zip);
  if (isNaN(req.body.zip) || zipCheck != 5) {
    const errorMessage = "Please Fill Enter A Valid Zip Code";
    res.render("error", { errorMessage });
  } else {
    res.cookie("zip", req.body.zip);
    res.redirect("/");
  }
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username", req.body.username);
  res.clearCookie("zip", req.body.zip);
  res.redirect("/hello");
});
//  /weather gets 7day forecast
router.get(
  "/seven-day",
  asyncHandler(async (req, res) => {
    const name = req.cookies.username;
    zip = req.cookies.zip;
    await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zip}&country=US&key=${key}&units=I`
      )
      .then(function (res) {
        return (weatherForecast = res.data);
      });
    getWeather();
    if (name) {
      return res.render("seven-day", {
        name,
        zip,
        weatherForecast,
        days,
        week,
      });
    } else {
      res.redirect("/hello");
    }
  })
);
//  todo
router.get(
  "/air-quality",
  asyncHandler(async (req, res) => {
    const name = req.cookies.username;
    zip = req.cookies.zip;
    await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zip}&country=US&key=${key}&units=I`
      )
      .then(function (res) {
        return (weatherForecast = res.data);
      });
    await axios
      .get(
        `https://api.weatherbit.io/v2.0/current/airquality?&postal_code=${zip}&country=US&key=${key}&units=I`
      )
      .then(function (res) {
        return (airQuality = res.data);
      });
    getWeather();
    if (name) {
      return res.render("air-quality", {
        name,
        zip,
        weatherForecast,
        days,
        week,
      });
    } else {
      res.redirect("/hello");
    }
  })
);

module.exports = router;
