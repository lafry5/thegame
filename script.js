// Counter
var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var done1El = document.querySelector("#done1");
var done2El = document.querySelector("#done2");
var done3El = document.querySelector("#done3");
var done4El = document.querySelector("#done4");
var done5El = document.querySelector("#done5");
var done6El = document.querySelector("#done6");
var done7El = document.querySelector("#done7");
var done8El = document.querySelector("#done8");
var done9El = document.querySelector("#done9");
var done10El = document.querySelector("#done10");
var done11El = document.querySelector("#done11");
var done12El = document.querySelector("#done12");
var countEl = document.querySelector("#count");

var btn = document.querySelector('#search-button')
var searchV = document.querySelector('#search-value')
var name = document.querySelector('#name') 
var today = document.querySelector('#today')
var forecast = document.querySelector('#forecast')


var myCityArray = [];




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
   myLi.addEventListener('click', function() {
    //    count++;
       console.log(count)
    //    setCounterText()
   })
//    return count
}
parentList.append(myLi)
console.log("Line 30 :- "+ currentcity);
console.log("mycityarray is" + myCityArray)
return myCityArray
}

// setCounterText()

btn.addEventListener('click', function() { 
    storecity(searchV.value)
    // buttonclick(searchV.value)
}) //end of addEventListener button */


incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

decrementEl.addEventListener("click", function() {
  if(count > 0) {
    count--;
    setCounterText();
  }
}); 

function setCounterText() {
    countEl.textContent = count;
    // return count
}

done1El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done2El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done3El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done4El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done5El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done6El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done7El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done8El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done9El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done10El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done11El.addEventListener('click', function() {
    count++;
    setCounterText();
});

done12El.addEventListener('click', function() {
    count++;
    setCounterText();
});


