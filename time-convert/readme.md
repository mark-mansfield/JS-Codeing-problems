# Time convert

Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to.

 (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

Sample Test Cases
Input:126

Output:"2:6"


Input:45

Output:"0:45"

# first attempt
```
function timeConvert(num) {

    // check edge case first
    if (num < 60) {
        return "0:" + num
    }

    // use a combination of math and string manipulation

    //  convert num to string to use substring of  as a minutes value
    const str = num.toString()

    // divide the number by 60 to get an hours value
    const hours = num / 60;

    // convert the hours to a string so we can get just the first character
    //  then we get the last character of the minutes value
    return hours.toString().charAt(0) + ":" + str.charAt(str.length - 1)
}


console.log(timeConvert(13))

```