var currentHour = moment().format('h');
var hourColor = document.getElementById("div");


var freshSeconds = function ()  {
    
    var dataTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("p#currentDay").html(dataTime);
};

//function saves new task to  local storage

//listen for event 
//


var colorTime = function() {


    $("textarea").each(function(){
        var textareaTime = parseInt($(this).attr("id"));

        if (textareaTime <currentHour) {
            $(this).addClass("past");
        } else if  (currentHour === textareaTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};

freshSeconds();
setInterval(freshSeconds, 1000);
setInterval(colorTime, 20000);


























// var pastHour = (parseInt(currentHour) -1)

// var futureHour = (parseInt(currentHour) +1)

// var

// //if future then all equal and greater are green
// // if past the all equal and less are red


// var aM = function() {
//     if (currentHour <= 9 && currentHour >= 12) {

//         pastHour
//         futureHour = green
//     }
// }

// var pM = function() {
//     if (currentHour <= 1 && currentHour >= 5) {

//         pastHour = red
//         futureHour = green

//     }
// }

// var welcomeDate = document.getElementById("currentDay");
// var currentMoment = document.createTextNode("current moment in time");

// welcomeDate.appendChild(currentMoment);
//var welcomeDate = $("#currentDay").textContent("hello12345");