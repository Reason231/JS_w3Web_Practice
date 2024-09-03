// . Write a JavaScript exercise to get the filename extension. 
const fileName = ["picture1.jpg", "picture2.png"];

fileName.forEach(name => {
    let filExtension = name.split(".").pop();
    console.log(filExtension); // Outputs the file extension for each file
});
