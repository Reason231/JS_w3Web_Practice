class Rectangle {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    area() {
        // Use the instance properties to calculate the area
        console.log(`The area of the rectangle is ${this.width * this.height}`);
    }

    perimeter() {
        // Use the instance properties to calculate the perimeter
        console.log(`The perimeter of the rectangle is ${2 * (this.width + this.height)}`);
    }
}

// Create an instance of the Rectangle class
const rectangle1 = new Rectangle(5, 5);

// Calculate area and perimeter
rectangle1.area();        // Output: The area of the rectangle is 25
rectangle1.perimeter();   // Output: The perimeter of the rectangle is 20
