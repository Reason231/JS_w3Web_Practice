function checks(a,b,c){
 if((a ===50)||(b===50) || ((a+b)===c) ){
    return "Your condition is true"
 } 
 else{
    return "Your conditon is not true"
 }
}
// let result=checks(25,15,50)                    // Not true
let result=checks(50,15,50)                       // true
console.log(result)