console.log ("The logic page is linked correctly");

$(document).ready(function(){
    alert("JQ working");
 });
/*This is the logic for the save button for each hour*/
var saveBtn = $(".saveBtn");
var userInput = $("#input");
var theHour = $("#9AM");
/*click event that*/
saveBtn.on("click", function () {
/*if input is not empty or null, then*/
    if (userInput !== null) {
/*grabs input from field*/
        userInput.val ();
        console.log (userInput.val());
/*grabs the time id of the time field*/
        /*maybe not yet? grab somewhere else, like at the end*/
/*converts input text to an array 
saves to local storage
displays in the field*/
    };
});
/*This is the logic to check moment.js for the current time*/
/*compares current time to input field id
if value of id < current hour, past
if value of id = current hour, present (minutes not considered)
if value of id > current hour, future
toggle the class style based on the comparison outcome*/