function getFormvalue() {
    let fname = document.getElementsByName("fname")[0].value;   // we should write [0] because it takes the first name
    let lname = document.getElementsByName("lname")[0].value;
    alert(`First Name: ${fname}, Last Name: ${lname}`);
}
