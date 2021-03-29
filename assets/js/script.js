var today = moment();
var currentDay = today.format("dddd [the ]Do MMMM YYYY");
var currentHour = parseInt(moment().format("H"))
var currentTime = today.format("h:mm:ss A");
// var currentHour = moment("29/03/2021", "11:05:00")
$("#currentDay").text("Today is " + currentDay);
$("#currentTime").text("The time is " + currentTime);

const timeBlock = $(".time-block");


// function (time) {
//     // Function to colorise the time blocks
//     if (moment(time).isBefore(currentHour, "hour")) {
//         console.log("before");
//     } else if (moment(time).isAfter(currentHour, "hour")) {
//         console.log("after");
//     } else if (moment(time).isSame(currentHour, "hour")) {
//         console.log("current");
//     }
// }

timeBlock.each(function () {
    var parent = $(this).parents(".flex-row");
    var timeId = parseInt(parent.attr("id"));
    var timeString = parent.attr("id");
    var thisHour = parseInt(moment().format("H"));
    var thisHString = (moment().format("H"));

    // console.log(parent);
    // console.log(timeId);
    // console.log("timeId is: " + moment(timeId));
    // console.log("thisHour is: " + thisHour);

    // console.log(moment(timeId));
    // console.log(moment(thisHour));

    if (timeId < thisHour) {
        $(this).addClass("past").removeClass("present future");
        // console.log("before");
    } else if (timeId > thisHour) {
        $(this).addClass("future").removeClass("present past");
        // console.log("after");
    } else if (timeId == thisHour) {
        $(this).addClass("present").removeClass("past future");
        // console.log("current");
    }

    // console.log(moment(timeString).isBefore(moment(thisHString), "hour"));
    // if (moment(timeId).isBefore(thisHour, "hour")) {
    //     $(this).addClass("past").removeClass("present future");
    //     console.log("before");
    // } else if (moment(timeId).isAfter(moment(thisHour), "hour")) {
    //     $(this).addClass("future").removeClass("present past");
    //     console.log("after");
    // } else if (moment(timeId).isSame(moment(thisHour), "hour")) {
    //     $(this).addClass("present").removeClass("past future");
    //     console.log("current");
    // }

    // console.log(moment(timeString).isBefore(moment("10"), "hour"));
    // console.log(moment("8").isAfter(moment("10"), "hour"));
})
$(".saveBtn").on("click", function () {
    console.log("Button clicked");
})
