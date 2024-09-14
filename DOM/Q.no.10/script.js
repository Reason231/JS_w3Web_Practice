const radius=document.getElementById("radius")
const calculate=document.getElementById("calculate")
const volume=document.getElementById("volume")


function calculateSphere(radius){
    if(radius < 0){
        alert("Radius shouldn't be less than zero")
    }
    else{
        return (4*Math.PI*Math.pow(radius,3) / 3)
    }
}

calculate.addEventListener("click",()=>{
    volume.value=(calculateSphere(radius.value)).toFixed(2)
})