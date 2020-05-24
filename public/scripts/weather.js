

const weatherBackground=(wetCode)=>{
    let styleInfo={}
    switch(wetCode){
        case 200 || 202 || 203 || 230 || 231 || 232:
           styleInfo={
            backgroundColor:"#373737",
            textColor:"#F7FFF7",
            imgPath:("./weatherImages/thunderstorm.jpg")}           
            break
        case 233:
            styleInfo={
                backgroundColor:"#101E12",
                textColor:"#F7FFF7",
                imgPath:("./weatherImages/hail.jpg")  
            }                       
            break
        case 300||301||302:
            styleInfo={
                backgroundColor:"#616163",
                textColor:"#F7FFF7",
                imgPath:("./weatherImages/drizzle.jpg")} 
            break
        case 500||501||502 ||520||521||522:            
            styleInfo={
                backgroundColo:"#7D8491",
                textColor:"#C0C5C1",
                imgPath:("./weatherImages/rain.jpg") 
            }
            break
        case 511:
            styleInfo={
            backgroundColor:"#A9E4EF",
            textColor:"#161925",
            imgPath:("./weatherImages/freezingRain.jpg")}
            break
        case 600||601||602||621||622:
            styleInfo={
            backgroundColor:"#5B778D",
            textColor:"#F5F3F5",
            imgPath:("./weatherImages/snow.jpg")} 
            break
        case 610||611||612:
            styleInfo={
            backgroundColor:"#759DBB",
            textColor:"#535657",
            imgPath:("./weatherImages/sleet.jpg")} 
            break
        case 623:
            styleInfo={
            backgroundColor:"#698598",
            textColor:"#F5F3F5",
            imgPath:("./weatherImages/flurries.jpg")}
            break
        case 711:
            styleInfo={
            backgroundColor:"#535657",
            textColor:"#E6E8E6",
            imgPath:("./weatherImages/smoke.jpg")}
            break
        case 700:       
            styleInfo={
            backgroundColor:"#C6DBF0",
            textColor:"#535657",
            imgPath:("./weatherImages/mist.jpg")}
            break
        case 721:
            styleInfo={
            backgroundColor:"#979A9A",
            textColor:"#EBEDEB",
            imgPath:("./weatherImages/haze.jpg")}
            break
        case 741:
            styleInfo={
            backgroundColor:"#888B8B",
            textColor:"#EBEDEB",
            imgPath:("./weatherImages/fog.jpg")}
            break
        case 751:
            styleInfo={
                backgroundColor:"rgb(81, 132, 141)",
                textColor:"#EBEDEB",
                imgPath:("./weatherImages/freezingfog.jpg")
            }
            break
        case 800:
            styleInfo=
            {backgroundColor:"#7BDFF2",
            textColor:"#303331",
            imgPath:("./weatherImages/clearSkies.jpg")}
            break
        case 801 || 802:
            styleInfo={
            backgroundColor:"#576CA8",
            textColor:"#BFC0C0",
            imgPath:("./weatherImages/partlyCloudy.jpg")}
            break
        case 803 || 804:
            console.log("OverCast")
            styleInfo={
            backgroundColor:"#ACADAD",
            textColor:"#F1F2EE",
            imgPath:("/weatherImages/overcast.jpg")}
            break
        default:
            styleInfo={
            backgroundColor:"#EEF0F2",
            textColor:"#353B3C",
            imgPath:("./weatherImages/partlyCloudy.jpg")}
        }
        return styleInfo
}
module.exports.weatherBackground = weatherBackground

       