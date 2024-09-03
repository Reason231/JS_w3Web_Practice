// Write a JavaScript program to calculate circle area and perimeter.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

class Circle{
    radius;
    constructor(radius){
        this.radius=radius
    }

    areaCircle(){
        console.log(Math.PI*Math.pow(this.radius,2))
    }
    perimeter(){
        console.log(2*Math.PI*this.radius)
    }
}

const circle=new Circle(5)
circle.areaCircle()
circle.perimeter()