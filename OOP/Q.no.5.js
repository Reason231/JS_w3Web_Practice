// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape{
    area(){
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius
    }

    area(){
        return Math.PI * Math.pow(this.radius,2);  // 2 represents the power 2
    }
}

class Triangle extends Shape{
    constructor(base,height){
        super()
        this.base=base,
        this.height=height
    }

    area(){
        return ((this.base*this.height)/2)
    }
}

let Triangle1=new Triangle(5,5)
console.log(Triangle1.area())

let Circle1=new Circle(5)
console.log(Circle1.area())