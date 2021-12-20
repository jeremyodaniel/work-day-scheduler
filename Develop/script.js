$(document).ready(function() {
//  the current day is displayed at the top of the calendar
    var currentDate = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").html(currentDate);
});


//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I click into a time block
//THEN I can enter an event
 var currentHour = moment().hours();

$(".time-block").each(function(index) {
    var block = $(this);
    var blockId = block.attr("id");
    var blockHour = blockId.split("-")[1];

    if (currentHour == blockHour) {
        $(this)>addClass("present");
    }
    else if (blockHour < currentHour) {
        $(this).addClass("past");
    }
    else if (blockHour > currentHour) {
        $(this).addClass("future");
    }
});

//  WHEN I click the save button for that time block
//  THEN the text for that event is saved in local storage
var saveBtn = $(".saveBtn");

$(saveBtn).on("click", function() {
    var text = $(this).siblings(".plan").val(); 
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);

});

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future





//WHEN I refresh the page
//THEN the saved events persist
