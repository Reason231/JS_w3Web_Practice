// Write a JavaScript program to calculate addition and subtraction and  multiplication and division of two numbers (input from the user).  
addition=()=>{
    let a=document.getElementById("1").value
    let b=document.getElementById("2").value
    let getValueOfa=Number(a)
    let getValueOfb=Number(b)
    const addition=getValueOfa + getValueOfb
    console.log(addition)
    let displayValue=document.getElementById("displayValue")
    displayValue.textContent=`The Result is: ${addition}`
}

subtraction=()=>{
    let a=document.getElementById("1").value
    let b=document.getElementById("2").value
    let getValueOfa=Number(a)
    let getValueOfb=Number(b)
    const subtraction=getValueOfa - getValueOfb
    console.log(subtraction)
    let displayValue=document.getElementById("displayValue")
    displayValue.textContent=`The Result is: ${subtraction}`
}

multiplication=()=>{
    let a=document.getElementById("1").value
    let b=document.getElementById("2").value
    let getValueOfa=Number(a)
    let getValueOfb=Number(b)
    const multiplication=getValueOfa * getValueOfb
    console.log(multiplication)
    let displayValue=document.getElementById("displayValue")
    displayValue.textContent=`The Result is: ${multiplication}`
}

division=()=>{
    let a=document.getElementById("1").value
    let b=document.getElementById("2").value
    let getValueOfa=Number(a)
    let getValueOfb=Number(b)
    const division=getValueOfa / getValueOfb
    console.log(division)
    let displayValue=document.getElementById("displayValue")
    displayValue.textContent=`The Result is: ${division}`

    if (getValueOfb === 0) {
        document.getElementById("displayValue").textContent = `Error: Division by zero is not allowed.`;
        return;
    }
}