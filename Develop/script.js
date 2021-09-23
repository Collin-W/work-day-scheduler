
var phreshSeconds = function ()  {
    
    var dataTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("p#currentDay").html(dataTime);
};

phreshSeconds();
setInterval(phreshSeconds, 1000);


var currentHour = moment().format('h');
console.log(currentHour);



































// var welcomeDate = document.getElementById("currentDay");
// var currentMoment = document.createTextNode("current moment in time");

// welcomeDate.appendChild(currentMoment);
//var welcomeDate = $("#currentDay").textContent("hello12345");