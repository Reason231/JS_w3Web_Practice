function Yourname(name){
    console.log(name)
}

delayFunction=(names,callback)=>{
    setTimeout(() => {
        callback(names)
    }, "2000");
}

delayFunction("reason",Yourname)
