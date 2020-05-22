const weatherBackground=(wetCode)=>{
    switch(wetCode){
        case 200 || 202 || 203 || 230 || 231 || 232:
            console.log("thunder")
            backgroundColor="#373737"
            textColor="#F7FFF7"
            imgPath=("./weatherImages/thunderstorm.jpg")           
            break
        case 233:
            console.log("hail")
            backgroundColor="#101E12"
            textColor="#F7FFF7"
            imgPath=("./weatherImages/hail.jpg")           
                      
            break
            case 300||301||302:
                console.log("drizzle")
                backgroundColor="#616163"
                textColor="#F7FFF7"
                imgPath=("./weatherImages/drizzle.jpg") 
            break
        case 500||501||502 ||520||521||522:
            console.log("rain")
            backgroundColor="#7D8491"
            textColor="#C0C5C1"
            imgPath=("./weatherImages/rain.jpg") 
            break
        case 511:
            console.log("freezing rain")
            backgroundColor="#A9E4EF"
            textColor="#161925"
            imgPath=("./weatherImages/freezingRain.jpg") 
            break
        case 600||601||602||621||622:
            console.log("snow")
            backgroundColor="#5B778D"
            textColor="#F5F3F5"
            imgPath=("./weatherImages/snow.jpg") 
            break
        case 610||611||612:
            console.log("sleet")
            backgroundColor="#759DBB"
            textColor="#535657"
            imgPath=("./weatherImages/sleet.jpg") 
            break
        case 623:
            console.log("flurries")
            backgroundColor="#698598"
            textColor="#F5F3F5"
            imgPath=("./weatherImages/flurries.jpg")
            break
        case 711:
            console.log("smoke")
            backgroundColor="#535657"
            textColor="#E6E8E6"
            imgPath=("./weatherImages/smoke.jpg")
            break
        case 700:
            console.log("mist")
            backgroundColor="#C6DBF0"
            textColor="#535657"
            imgPath=("./weatherImages/mist.jpg")
            break
        case 721:
            console.log("haze")
            backgroundColor="#979A9A"
            textColor="#EBEDEB"
            imgPath=("./weatherImages/haze.jpg")
            break
        case 741:
            console.log("fog")
            backgroundColor="#888B8B"
            textColor="#EBEDEB"
            imgPath=("./weatherImages/fog.jpg")
            break
        case 751:
            console.log("freeing fog")
            backgroundColor="rgb(81, 132, 141)"
            textColor="#EBEDEB"
            imgPath=("./weatherImages/freezingfog.jpg")
            break
        case 800:
            console.log("Clear skies")
            backgroundColor="#7BDFF2"
            textColor="#303331"
            imgPath=("./weatherImages/clearSkies.jpg")
            break
        case 801 || 802:
            console.log(" Partly Cloudy")
            backgroundColor="#576CA8"
            textColor="#BFC0C0"
            imgPath=("./weatherImages/partlyCloudy.jpg")
            break
        case 803 || 804:
            console.log("OverCast")
            backgroundColor="#ACADAD"
            textColor="#F1F2EE"
            imgPath=("./weatherImages/overcast.jpg")
            break
        default:
            console.log("default weather")
            backgroundColor="#EEF0F2"
            textColor="#353B3C"
            imgPath=("./weatherImages/partlyCloudy.jpg")
        }
}
module.exports.weatherBackground = weatherBackground

       