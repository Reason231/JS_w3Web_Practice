function Errorgiver(integer){
    if(typeof integer === "number"){
        console.log("It is a number")
    }
    else{
        console.log("It is not a number")
    }
}
Errorgiver(123)