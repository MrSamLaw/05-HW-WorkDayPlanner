var today = moment();
var currentDay = today.format("dddd [the ]Do MMMM YYYY");
var currentHour = parseInt(moment().format("H"))
var currentTime = today.format("h:mm:ss A");
// var currentHour = moment("29/03/2021", "11:05:00")
$("#currentDay").text("Today is " + currentDay);
$("#currentTime").text("The time is " + currentTime);

const timeBlock = $(".time-block");

timeBlock.each(function () {
    var parent = $(this).parents(".flex-row");
    var timeId = parseInt(parent.attr("id"));
    var timeString = parent.attr("id");
    var thisHour = parseInt(moment().format("H"));
    var thisHString = (moment().format("H"));

    if (timeId < thisHour) {
        $(this).addClass("past").removeClass("present future");
    } else if (timeId > thisHour) {
        $(this).addClass("future").removeClass("present past");
    } else if (timeId == thisHour) {
        $(this).addClass("present").removeClass("past future");
    }
    $(this).val(localStorage.getItem(parent.attr("id")));
})

$(".saveBtn").on("click", function () {
    console.log("Button clicked");
    var taskText = $(this).siblings(".time-block").val();
    console.log(taskText);
    var hourTask = $(this).parent(".flex-row").attr("id");
    console.log(hourTask);
    localStorage.setItem(hourTask, taskText);
    if (taskText) {

    }
})
