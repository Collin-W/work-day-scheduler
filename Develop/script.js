//var hang out spot
//var currentHour = moment().format('h');
var currentHour = 1;
console.log(currentHour);
console.log(moment().format('h'));
var hourColor = document.getElementById("div");
var taskNumber = 0;
//array
var taskArray = [];


//timer display
var freshSeconds = function () {
    var dataTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("p#currentDay").html(dataTime);
};

//changes colors based on time of work day using military time format in html
var colorTime = function () {
    $("textarea").each(function () {
        var textareaTime = parseInt($(this).attr("id"));
        var currentHourInt = parseInt(currentHour);
        console.log(currentHourInt);


        //works with 9am-12pm hours
            if (textareaTime < currentHourInt) {
                $(this).addClass("past");
            } else if (currentHourInt === textareaTime) {
                $(this).addClass("present");
        
            } else {
                $(this).addClass("future");
            }


      //adjusted for 1pm-5pm hours
        
            if (textareaTime < currentHourInt + 12) {
                $(this).addClass("past");
            } else if (currentHourInt + 12 === textareaTime) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        
    })
};
//} else if  (currentHourInt <= 5 && textareaTime > currentHourInt) {
                //$(this).addClass("past");

//saves the value of the textarea element that the button click function passes, into an empty array with a key of 'task'. The key and its array are located in local storage
var saveTasks = function (textareaElValue) {

    taskArray.push(textareaElValue);
    var storedTasks = localStorage.setItem('task', taskArray);
    renderTasks()
};

//grabs the entire array from local storage with the single key 'task'
function renderTasks() {

    var retrieveTasks = localStorage.getItem('task');
    console.log(retrieveTasks);
};

$('button').click(function () {

    var btnId = $(this).attr('id');
    var textareaValue = $(this)[0].parentElement.children[1].value;
    console.log("clicked value:  " + textareaValue);
    $(this).on('click', saveTasks(textareaValue));
});


//calls and interval hang out spot
setInterval(freshSeconds, 1000);
setInterval(colorTime, 20000);
colorTime();
freshSeconds();