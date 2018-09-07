# Time convert

Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to.

 (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

Sample Test Cases
Input:126

Output:"2:6"


Input:45

Output:"0:45"

# Solution - using division and modulo
```javascript
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


console.log(timeConvert(13))

```