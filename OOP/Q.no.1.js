class Person{
    name;
    age;
    country;

    constructor(_name,_age,_country){
        this.name=_name;
        this.age=_age;
        this.country=_country;
    }

    displayDetails(){
        console.log(`Name:${this.name}, Age:${this.age}, Country:${this.country}`)
    }
}

const person1=new Person("Reason","16","Nepal")
const person2=new Person("Speed","24","USA")

person1.displayDetails()