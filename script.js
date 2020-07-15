var btn = document.querySelector('#search-button')
var searchV = document.querySelector('#search-value')
var name = document.querySelector('#name') 
var wind = document.querySelector('#wind') 
var humidity = document.querySelector('#humidity')
var temp = document.querySelector('#temp') 
var uv = document.querySelector('#uv')
var desc = document.querySelector('#desc')
var day = document.querySelector('#day')
var today = document.querySelector('#today')
var forecast = document.querySelector('#forecast')

var myCityArray = [];

day = moment().format('L');


// Store cities

function storecity(city){
myCityArray.push(city)
console.log("city passed " + city)
for(i=0;i<myCityArray.length;i++){
   var currentcity = myCityArray[i];
   localStorage.setItem('citykey',myCityArray)
   var parentList = document.querySelector(".list-group")
  var myLi = document.createElement("li")
   myLi.textContent = currentcity
   myLi.addEventListener('click', function() {searchcities(this.textContent)})
}
parentList.append(myLi)
console.log("Line 30 :- "+ currentcity);
console.log("mycityarray is" + myCityArray)
return myCityArray
}

btn.addEventListener('click', function() { 
    console.log(searchV.value)
   /* searchcities(searchV.value) */
    storecity(searchV.value)
    buttonclick(searchV.value)
}) //end of addEventListener button */



