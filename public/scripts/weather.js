const thunderStorm={
    backgroundColor: "55, 55, 55",    
    textColor: "#F7FFF7",
    imgPath: "./weatherImages/thunderstorm.jpg",
}
const hail={
    backgroundColor: "16, 30, 18",    
    textColor: "#F7FFF7",
    imgPath: "./weatherImages/hail.jpg",
  }
const drizzle ={
    backgroundColor: "97, 97, 99",    
    textColor: "#F7FFF7",
    imgPath: "./weatherImages/drizzle.jpg",
  }
const rain={
    backgroundColor: "192, 197, 193",    
    textColor: "#202f38",
    imgPath: "./weatherImages/rain.jpg",
  }
const freezingRain={
    backgroundColor: "169, 228, 239",    
    textColor: "#161925",
    imgPath: "./weatherImages/freezingRain.jpg",
  }
const snow={
    backgroundColor: "91, 119, 141",    
    textColor: "#F5F3F5",
    imgPath: "./weatherImages/snow.jpg",
  }
const sleet= {
    backgroundColor: "117, 157, 187",    
    textColor: "#535657",
    imgPath: "./weatherImages/sleet.jpg",
  }
const flurries={
    backgroundColor: "117, 157, 187",
    textColor: "#F5F3F5",
    imgPath: "./weatherImages/flurries.jpg",
  }
const smoke={
    backgroundColor: "83, 86, 87",    
    textColor: "#E6E8E6",
    imgPath: "./weatherImages/smoke.jpg",
  }
const mist= {
    backgroundColor: "198, 219, 240",    
    textColor: "#535657",
    imgPath: "./weatherImages/mist.jpg",
  }
const haze={
    backgroundColor: "151, 154, 154",    
    textColor: "#EBEDEB",
    imgPath: "./weatherImages/haze.jpg",
  }
const fog={
    backgroundColor: "136, 139, 139",    
    textColor: "#EBEDEB",
    imgPath: "./weatherImages/fog.jpg",
  }
const freezingFog={
    backgroundColor: "81, 132, 141",    
    textColor: "#EBEDEB",
    imgPath: "./weatherImages/freezingfog.jpg",
  }
const clearSkies={
    backgroundColor: "123, 223, 242",    
    textColor: "#303331",
    imgPath: "./weatherImages/clearSkies.jpg",
  }
const partlyCloudy={
    backgroundColor: "87, 108, 168",    
    textColor: "#E1BC29",
    imgPath: "./weatherImages/partlyCloudy.jpg",
  }
const overcast={
    backgroundColor: "121, 122, 128",    
    textColor: "#F1F2EE",
    imgPath: "/weatherImages/overcast.jpg",
  }
const defaultScheme={
    backgroundColor: "238, 240, 242",    
    textColor: "#E1BC29",
    imgPath: "./weatherImages/partlyCloudy.jpg",
  }

const weatherBackground = (wetCode) => {
  let styleInfo = {};
  switch (wetCode) {
    case 200:
      styleInfo = thunderStorm
      break;
    case 201:
      styleInfo = thunderStorm
      break;
    case 202:
      styleInfo = thunderStorm
      break;
    case 203:
      styleInfo = thunderStorm
      break;
    case  230:
      styleInfo = thunderStorm
      break;
    case  231:
      styleInfo = thunderStorm
      break;
    case  232:
      styleInfo = thunderStorm
      break;
    case 233:
      styleInfo = hail;
      break;
    case 300:
      styleInfo = drizzle;
      break;
    case 301:
      styleInfo = drizzle;
      break;
    case 302:
      styleInfo = drizzle;
      break;
    case 500:
      styleInfo = rain;
      break;
    case 501:
      styleInfo = rain;
      break;
    case 502:
      styleInfo = rain;
      break;
    case 520:
      styleInfo = rain;
      break;
    case  521:
      styleInfo = rain;
      break;
    case 522:
      styleInfo = rain;
      break;
    case 511:
      styleInfo = freezingRain;
      break;
    case 600:
      styleInfo = snow;
      break;
    case 601:
      styleInfo = snow;
      break;
    case 602:
      styleInfo = snow;
      break;
    case 621:
      styleInfo = snow;
      break;
    case 622:
      styleInfo = snow;
      break;
    case 610:
      styleInfo =sleet;
      break;
    case 611:
      styleInfo =sleet;
      break;
    case 612:
      styleInfo =sleet;
      break;
    case 623:
      styleInfo = flurries;
      break;
    case 711:
      styleInfo = smoke;
      break;
    case 700:
      styleInfo =mist;
      break;
    case 721:
      styleInfo = haze;
      break;
    case 741:
      styleInfo = fog;
      break;
    case 751:
      styleInfo = freezingFog;
      break;
    case 800:
      styleInfo = clearSkies;
      break;
    case 801:
      styleInfo = partlyCloudy;
      break;
    case 802:
      styleInfo = partlyCloudy;
      break;
    case 803:
      styleInfo = overcast;
      break;
    case 804:
      styleInfo = overcast;
      break;
    default:
      styleInfo = defaultScheme;
  }
  return styleInfo;
};
module.exports.weatherBackground = weatherBackground;
