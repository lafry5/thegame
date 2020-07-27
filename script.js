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


showImage()

// Store cities

function storecity(city){
myCityArray.push(city)
console.log("city passed " + city)
for(i=0;i<myCityArray.length;i++){
   var currentcity = myCityArray[i];
   localStorage.setItem('citykey',myCityArray)
   var parentList = document.querySelector(".list-group")
   var myLi = document.createElement("li")
   var contactbutton = document.createElement("button")
   contactbutton.textContent = "Contact made"
   myLi.textContent = currentcity
   contactbutton.addEventListener('click', function() {
       count++;
       setCounterText()
       showImage()
       console.log(count)
    //    setCounterText()
   })
//    return count
}
myLi.append(contactbutton) //append puts the button after; prepend puts the button before
parentList.append(myLi)
console.log("Line 30 :- "+ currentcity);
console.log("mycityarray is" + myCityArray)
return myCityArray
}

// setCounterText()

btn.addEventListener('click', function() { 
    storecity(searchV.value)
    //Need to figure the next two lines out so it hides the intro
    // document.getElementById('intro').style.visibility = "hidden";
    // buttonclick(searchV.value)
}) //end of addEventListener button */


// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText()
//   showImage();
// });

// decrementEl.addEventListener("click", function() {
//   if(count > 0) {
//     count--;
//     setCounterText()
//     showImage();
//   }
// }); 

function setCounterText() {
    countEl.textContent = count;
    // return count
}

done1El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done2El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done3El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done4El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done5El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done6El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done7El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

done8El.addEventListener('click', function() {
    count++;
    setCounterText()
    showImage();
});

// done9El.addEventListener('click', function() {
//     count++;
//     setCounterText()
//     showImage();
// });

// done10El.addEventListener('click', function() {
//     count++;
//     setCounterText()
//     showImage();
// });

// done11El.addEventListener('click', function() {
//     count++;
//     setCounterText()
//     showImage();
// });

// done12El.addEventListener('click', function() {
//     count++;
//     setCounterText()
//     showImage();
// });


// Display images
// var logoEl = document.getElementById('logo')
// var imgReplace = document.getElementById('logo-image'); 
// var imgReplace3 = document.getElementById('logo-image2')
// var imgReplace4 = document.getElementById('logo-image3')
// var imgReplace5 = document.getElementById('logo-image4')
// var imgReplace6 = document.getElementById('logo-image5')
// var imgReplace7 = document.getElementById('logo-image6')
// var imgReplace8 = document.getElementById('logo-image7')
// var imgReplace9 = document.getElementById('logo-image8')
// var imgReplace10 = document.getElementById('logo-image9')
// var imgReplace11 = document.getElementById('logo-image10')
// var imgReplace12 = document.getElementById('logo-image11')
// imgReplace.src = "5things.jpg";
// imgReplace2.src = "great job.jpg";
// imgReplace3.src = "keep going.jpg";
// imgReplace4.src = "keep smiling.png";
// imgReplace5.src = "way to go.jpg";
// imgReplace6.src = "you are amazing.jpg";
// imgReplace7.src = "you are beautiful.jpg";
// imgReplace8.src = "you are loved.jpg";
// imgReplace9.src = "you did it.jpg";
// imgReplace10.src = "you got this.jpg";
// imgReplace11.src = "you're awesome.jpg";
// imgReplace12.src = "you are not alone.jpg";

function showImage(num) {
    console.log(count)
    if(count==0) {   
        var name = prompt("What's your name?")
        alert("Welcome to Back to Better, " + name)        
     } // end of if =0 
    if(count==1) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "5things.jpg";
        imgReplace.style.visibility = "visible";
        // setTimeout(function(){
        //     imgEl.classList.add("hide");
        // }, 2000)
        // { alert("Congratulations!") 
        //  }
    } // end of if =1   
    if(count==2) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "great job.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =2  

    if(count==3) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "keep going.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =3
    if(count==4) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "keep smiling.png";
        imgReplace.style.visibility = "visible";
    } // end of if =4
    if(count==5) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "way to go.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =5
    if(count==6) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you are amazing.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =6  
    if(count==7) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you are beautiful.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =7 
    if(count==8) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you are loved.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =8 
    if(count==9) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you did it.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =9 
    if(count==10) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you got this.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =10 
    if(count==11) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you're awesome.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =11  
    if(count==12) {
        var imgReplace = document.getElementById('logo-image');
        imgReplace.src = "you are not alone.jpg";
        imgReplace.style.visibility = "visible";
    } // end of if =12                
    
} // end of showImage


