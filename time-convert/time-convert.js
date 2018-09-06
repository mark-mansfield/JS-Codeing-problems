function timeConvert(num) {

    //  Math approach using division and modulo
    //  math floor returns us the largest number based on its arguments , a division equation
    var hours = Math.floor(num / 60);

    // lets get the minutes by getting the remiander or just the whole number if under 60
    var minutes = num % 60;
    console.log(minutes)

    // combine the hours and minutes
    return hours + ':' + minutes
}



console.log(timeConvert(301))