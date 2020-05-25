var moment = require('moment'); 
let week=[]

const getWeek=()=>{    
    for(i=0;i<7;i++){
        let day = moment().add(i,"d").format("dddd")
        let num = moment().add(i,"d").format("MMMM Do")
        let date=`${day}, ${num}`
        week.push(date)
    }
    return week
}

module.exports.getWeek = getWeek;
