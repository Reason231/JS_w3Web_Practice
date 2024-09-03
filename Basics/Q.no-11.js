// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
 


function tempCtoF(c){
   let f=(c*9+(32*5))/5
   console.log(c,'°C is',f,'°F')
}

function tempFtoC(f){
   let  c=(5*(f-32))/9
   console.log(f,'°F is',c,'°C')
}
tempCtoF(60)
tempFtoC(45)