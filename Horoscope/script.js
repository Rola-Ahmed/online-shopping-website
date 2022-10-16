//document.getElementById("ZodiaccType").onclick = checkZodiac;

"use strict";
//Get values day, month
//valied day,month
//display error if exists
//get correct horoscope
//display coorect Horoscope


const getHoroscopeVal_22=function(){
    var month = Number(document.getElementById("Month").value);
    let day = parseInt(document.getElementById("Day").value);
    let year = parseInt(document.getElementById("Year").value);
    

    if(validateDate_22(day,month,year)){
        checkZodiac(month,day);

    }else{
        //display errorr if exists
        displayError();
    }
}



const validateDate_22 = function (day, month,year) {


    //if(!checkText(month)){
        
        if (month < 1 || month > 12 ) return false;
        if(year < 1990 || year > 2022)return false;

    // }
    //else{
    //     if (month < 1 || month>12 ) return false;
    // }
    if (isNaN(day)  || isNaN(year)) return false;
    
    if(day < 1 || day>31)return false;

    if(day> 30 &&(month==4 || month==6|| month== 9 || month== 11 )) return false;
    if(month== 2 && day== 29 && year%4!=0) return false;
   
    return true;


    //     if (month < 1 || month>12 ) {
    //         alert("enter month correclty");
    //     }  
    
    // if ( day < 1 || day > 31 || isString(day)) {
    //     alert("enter day correclty");
    // }
   
   
   
  };

    function displayZodiac(userZodiac) {
        document.getElementById("zodiacType").innerHTML = userZodiac;
    };



    const displayError = function () {
        document.getElementById("result").innerHTML =
          "<strong style='color:red'>Please enter a valid date </strong>";
      };


   /* const displayHoroscopeName = function (name) {
        document.getElementById("result").innerHTML =
          "<strong style='color:green'>" + name + "</strong>";
      };*/
      








      function checkZodiac(month,day) {
        // var month = document.getElementById("Month").value;
        // var day = parseInt(document.getElementById("Day").value);
      //   checkstring();
         //declare variable for input value
        // var month = document.getElementById("Month").value;
        // var day = parseInt(document.getElementById("Day").value);
         let zodiacSign;
 
         if (
             ((month === 3) &&
                 day >= 21 &&
                 day <= 31) ||
             ((month === 4) &&
                 day >= 1 &&
                 day <= 19)
         ) {
             zodiacSign = "Passionate Aries";
         } else if (
             ((month === 4) &&
                 day >= 20 &&
                 day <= 30) ||
             ((month === 5) && day >= 1 && day <= 20)
         ) {
             zodiacSign = "Persistent Taurus";
         } else if (
             ((month == 5) && day >= 21 && day <= 31) ||
             ((month === 6) && day >= 1 && day <= 20)
         ) {
             zodiacSign = "Witty Gemini";
         } else if (
             ((month === 6) && day >= 21 && day <= 30) ||
             ((month === 7) && day >= 1 && day <= 22)
         ) {
             zodiacSign = "Emotional Cancer";
         } else if (
             ((month === 7) && day >= 23 && day <= 31) ||
             ((month === 8) &&
                 day >= 1 &&
                 day <= 22)
         ) {
             zodiacSign = "Confident Leo";
         } else if (
             ((month === 8) &&
                 day >= 23 &&
                 day <= 31) ||
             ((month === 9) &&
                 day >= 1 &&
                 day <= 22)
         ) {
             zodiacSign = "Analytical Virgo";
         } else if (
             ((month === 9) &&
                 day >= 23 &&
                 day <= 31) ||
             ((month === 10) &&
                 day >= 1 &&
                 day <= 22)
         ) {} else if (
             ((month === 10) &&
                 day >= 23 &&
                 day <= 31) ||
             ((month === 11) &&
                 day >= 1 &&
                 day <= 21)
         ) {
             zodiacSign = "Passionate Scorpio";
         } else if (
             ((month === 11) &&
                 day >= 22 &&
                 day <= 30) ||
             ((month === 12) &&
                 day >= 1 &&
                 day <= 21)
         ) {
             zodiacSign = "Adventurous Sagittarius";
         } else if (
             ((month === 12) &&
                 day >= 22 &&
                 day <= 31) ||
             ((month === 1) &&
                 day >= 1 &&
                 day <= 19)
         ) {
             zodiacSign = "Wise Capricorn";
         } else if (
             ((month === 1) &&
                 day >= 20 &&
                 day <= 31) ||
             ((month == 2) &&
                 day >= 1 &&
                 day <= 18)
         ) {
             zodiacSign = "Inventive Aquarius";
         } else if (
             ((month === 2) &&
                 day >= 19 &&
                 day <= 29) ||
             ((month == 3) &&
                 day >= 1 &&
                 day <= 20)
         ) {
             zodiacSign = "Selfless Pisces";
         } else {
             alert("enter again");
         }
         displayZodiac(zodiacSign);
     };