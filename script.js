$(document).ready(function() {
    var m = moment();
    var timeArray = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    function dateToday() {
        $("#currentDay").text(m.format('dddd, MMMM Do YYYY'));
    };
    
    var newRow = $("<tr>");
    var timeCol = $("<td>");
    var eventCol = $("<td>");
    var buttonCol = $('<td><button type="button" class="btn btn-primary saveBtn">Save</button></td>');
    newRow.append(timeCol);
    newRow.append(eventCol);
    newRow.append(buttonCol);
    function addRow() {
        for (var i = 0; i < 9; i++) {
            eventCol.text(timeArray[i]);
            $("tbody").append(newRow.clone());
        };
    };
    dateToday();
    addRow();
});