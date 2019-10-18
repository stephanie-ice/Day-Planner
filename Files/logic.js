console.log ("The logic page is linked correctly");

$(document).ready(function(){
    alert("JQ working");
    /*This is the logic for the save button for each hour*/
    var saveBtn = $("#saveBtn");
    var userInput = $("#input");
    /*click event that*/
    saveBtn.on("click", function () {
        alert("The click button is working");
        /*if input is not empty or null, then*/
        if (userInput !== null) {
            /*grabs input from field*/
            var input = userInput.text();
            console.log (input);

            event.preventDefault();
            
            /*saves to local storage*/
            localStorage.setItem("9AM", JSON.stringify(input));
            /*displays in the field*/
            var savedInput = localStorage.getItem("9AM");
            userInput.textContent= savedInput;
            console.log (savedInput);    
            }
        else {
            alert("Please, tell us all about your busy life!");
        };    
    });
    /*This is the logic to check moment.js for the current time*/
    /*compares current time to input field id
    if value of id < current hour, past
    if value of id = current hour, present (minutes not considered)
    if value of id > current hour, future
    toggle the class style based on the comparison outcome*/
});