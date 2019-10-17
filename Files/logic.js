/*This is the logic for the submit button for each hour*/

/*click event that
if input is not empty or null, then
grabs input from field
notes the id of the field, set to the corresponding hour
converts input text to an array 
saves to local storage
displays in the field*/

/*This is the logic to check moment.js for the current time
compares current time to input field id
if value of id < current hour, past
if value of id = current hour, present (minutes not considered)
if value of id > current hour, future
toggle the class style based on the comparison outcome