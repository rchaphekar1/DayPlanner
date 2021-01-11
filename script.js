$(document).ready(function() {
    var m = moment();
    function dateToday() {
        $("#currentDay").text(m.format('dddd, MMMM Do YYYY'));
    }
    dateToday();
});