var currentHour = moment().format('h');
var hourColor = document.getElementById("div");
var taskNumber = 0;


// var taskArray = [
//     {
//         task: "value"
//     }
// ];




//timer display
var freshSeconds = function () {
    var dataTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("p#currentDay").html(dataTime);
};

//changes colors based on time of work day using military time format in html
var colorTime = function () {
    $("textarea").each(function () {
        var textareaTime = parseInt($(this).attr("id"));

        if (textareaTime < currentHour) {
            $(this).addClass("past");
        } else if (currentHour === textareaTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};

setInterval(freshSeconds, 1000);
setInterval(colorTime, 1000);
freshSeconds();


//make array
//on click grab id and value
//push this to the end of an array
//save array to storage then access array


//function saves new task to  local storage

//listen for event 
//

var taskArray = [];

var saveTasks = function (a) {

    taskNumber++

    // taskArray.push(JSON.stringify(a))

   taskArray.push(a);
    //taskArray.push(a);

   // for (var i = 0; i < taskArray.length; i++) {

       // console.log(taskArray[i]);

        //var pushedTask = taskArray[i];
        
       // console.log(pushedTask + " this should be defined");

    var storedTasks = localStorage.setItem('task', taskArray);
    //console.log(storedTasks);



    // if (location.reload()) {}
      //var retrieveTasks = JSON.parse(localStorage.getItem('task'[taskNumber]));
    
      renderTasks()

   
    //}
};



function renderTasks() {


    var retrieveTasks = localStorage.getItem('task');
    console.log(retrieveTasks);


}



///var retrieveTasks =JSON.pars(localStorage.getItem('task'));

$('button').click(function () {

    var btnId = $(this).attr('id');
    //console.log($(this));
    //console.log($(this)[0].parentElement);
    //console.log($(this)[0].parentElement.children[1].value);
    var textareaValue = $(this)[0].parentElement.children[1].value;
    console.log("clicked value:  "+textareaValue);

    //
   $(this).on('click', saveTasks(textareaValue));
});

// var tasksVal = function () {
//     $('textarea').each(function () {
//         var textareaId = $(this).attr('id');
//         textareaValue = $(this).val();
//         //need an event to save value on click
//         console.log(textareaValue);
//         console.log(textareaId);
//     });
// };

// tasksVal();






// $('textarea').each(function(index, value) {
//     console.log(`textarea${index}: ${this.id}`);
//   });

//need a btn that can listen to all the elements for my task storage

//     //var taskId = parseInt($(this).attr("id"));
//     var taskValue = $(this).attr('value');

//    var taskEvent = $(this).on.click.data;

//     if (taskEvent) {
//         var storedTasks = localStorage.setItem("task", taskValue);
//     console.log(storedTasks)
//     } else {
//         return;
//     }
























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




// var saveTasks = function (a) {

//     taskNumber++

//    // taskArray.push(JSON.stringify(a));
//     var taskPush = taskArray.push(a);
//     console.log(taskArray.push(a));

//     //for (var i = 0; i < taskArray.length; i++) {

//         console.log(taskArray[taskNumber]);

//         var pushedTask = taskArray[taskNumber];
        
//         console.log(pushedTask + " this should be defined");

//         var storedTasks = localStorage.setItem('task',pushedTask[taskNumber]);

//     //var storedTasks = localStorage.setItem('task', JSON.stringify(pushedTask[taskNumber]));
//     console.log(JSON.parse(storedTasks));



//     // if (location.reload()) {}
//       var retrieveTasks = JSON.parse(localStorage.getItem('task',pushedTask[taskNumber]));
//       //var retrieveTasks = localStorage.getItem('task', pushedTask[taskNumber]);
//       console.log(retrieveTasks);

//       renderTasks(retrieveTasks)

   
//    // }
// };