$(document).ready(function() {
    var m = moment();
    var timeArray = ["09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM"];
    
    // Function that uses moment.js to get the current date
    function dateToday() {
        $("#currentDay").text(m.format('dddd, MMMM Do YYYY'));
    };
    dateToday();
    
    // Function to add rows to page dynamically
    function addRow() {
        for (var i = 0; i < timeArray.length; i++) {
            var newRow = $("<tr>");
            var timeCol = $("<td>");
            var eventCol = $('<td id="event-col" contenteditable="true"></td>');
            var buttonCol = $('<td><button type="button" class="btn btn-primary saveBtn">Save</button></td>')
                .attr("value", i);
            newRow.append(timeCol);
            newRow.append(eventCol);
            newRow.append(buttonCol);
            timeCol.text(timeArray[i]);
            $("table").append(newRow);
            // Attempted to use Moment methods to compare current time to those listed
            if (moment().isSame(timeArray[i])) {
                buttonCol.addClass("present");
            } else if (moment().isBefore(timeArray[i])) {
                buttonCol.addClass("future");
            } else if (moment().isAfter(timeArray[i])) {
                buttonCol.addClass("past");
            };
        };
    };
    addRow();
    
    // Saves to local storage on button click
    var eventInfo;
    $(".saveBtn").on("click", function(event) {
        console.log(this.value);
        event.preventDefault();
        eventInfo = $("#event-col").text();
        console.log(eventInfo);
        localStorage.setItem("eventInfo", JSON.stringify(eventInfo));
    });
    eventInfo = JSON.parse(localStorage.getItem("eventInfo"));
    $("#event-col").text(eventInfo);
});