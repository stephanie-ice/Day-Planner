console.log ("The logic page is linked correctly");

$(document).ready(function(){
    console.log("JQ working");
    /*This is the logic for the save button for each hour*/
    /*click event that*/
    /*I got help with this; the .key method is new learning for me. It helps me to make the hour value a variable
    sot hat I don't have to make 8 click events!!!*/

    for (var i = 0; i < localStorage.length; ++i ) {
        console.log("key", localStorage.key(i)) 
        console.log("value", localStorage.getItem(localStorage.key(i)) );
        $("#task_" + localStorage.key(i)).val(localStorage.getItem(localStorage.key(i)));
    }    

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var time = $(event.target).data("time");
        var task = $("#task_" + time).val();

        console.log("The click button is working");
        /*if input is not empty or null, then*/
        if (task !== "") {
            console.log(task);

            /*saves to local storage*/
            localStorage.setItem(time, task);
        } else {
            alert("Please, tell us all about your busy life!");
        }  
    });
    /*This is the logic to check moment.js for the current time*/
    /*compares current time to input field id
    if value of id < current hour, past
    if value of id = current hour, present (minutes not considered)
    if value of id > current hour, future
    toggle the class style based on the comparison outcome*/
});