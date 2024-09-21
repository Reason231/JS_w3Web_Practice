const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const password = document.getElementById("password");

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    
    if (nameInput.value === "") {
        nameInput.value = "This shouldn't be empty"; // Set this message if the input is empty
    }

    if (password.value === "") {
        password.type = "text"; // Temporarily change the type to text to display the message
        password.value = "Password shouldn't be empty";
    }
});
