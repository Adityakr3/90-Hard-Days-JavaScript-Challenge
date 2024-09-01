//  Create a function that dispaly the current date and time in a specific format.

function getCurrentDateAndTime(){
    let CurrentDateAndTime = new Date();
    return CurrentDateAndTime.toLocaleString();
}
console.log(getCurrentDateAndTime());
