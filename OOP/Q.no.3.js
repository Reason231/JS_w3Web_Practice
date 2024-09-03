class Vehicle{
    make;
    model;
    year;

    constructor(_make,_model,_year){
        this.make=_make;
        this.model=_model;
        this.year=_year;
    }

    vehicleDetails(){
        console.log(`Model: ${this.model}, made by:${this.make}, in ${this.year}`)
    }
}

class Car extends Vehicle{
    numberDoors;

    constructor(_make,_model,_year,_numberDoors){
        super(_make,_model,_year)  // super is required to take the properties from the parents
        this.numberDoors=_numberDoors
    }

    vehicleDetails(){
        // super.vehicleDetails()   // It inherits the information from the parents.
        console.log(`Model: ${this.model}, made by:${this.make}, in ${this.year} which has ${this.numberDoors} door`)
    }
}

const Car1=new Car("Reason","Lambor",1999,4)
Car1.vehicleDetails()