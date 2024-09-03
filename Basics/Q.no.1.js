// Days code
const today = new Date();
const day = today.getDay();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + weekDays[day]);

// Time code
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let period = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;  // If 0 ? 0 : 12 => It gives 12 cause 0 is considered as false so it wont match 0=0

console.log("Current time is : " + hours + " " + period + " : " + minutes + " : " + seconds);
