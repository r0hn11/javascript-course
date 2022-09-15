let date = new Date()
console.log(typeof date)

let otherday = new Date(`5-11-2001 7:57:00`)    //mm-dd-yy
otherday = new Date(`June 22 2022`)
otherday = new Date(`6/25/2001 11:05:32`)
console.log(otherday)

day = otherday.getDay()    //1
month = otherday.getMonth()    //3
year = otherday.getFullYear()    //2001
date = otherday.getDate()    //25
hours = otherday.getHours()   //11
minutes = otherday.getMinutes()    //5
seconds = otherday.getSeconds()    //32
time = otherday.getTime()   //total miliseconds since January 1, 1970 00:00:00
updateD = otherday.setDate(23)
updateM = otherday.setMonth(0)
updateY = otherday.setFullYear(2015)
updateH = otherday.setHours(1)
updateM = otherday.setMinutes(2)
updateS = otherday.setSeconds(3)