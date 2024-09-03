// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    totalPrice(quantity) {
        const total = this.price * quantity;
        console.log(`ProductId: ${this.productId} of ${this.name} with price ${this.price}`);
        console.log(`The total price is ${total}`);
        return total;
    }
}

class PersonalCareProduct extends Product {
    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    totalPrice(quantity) {
        const total = this.price * quantity;
        console.log(`ProductId: ${this.productId} of ${this.name} with price ${this.price} and a warranty of ${this.warrantyPeriod}`);
        console.log(`The total price is ${total}`);
        return total;
    }
}

const personalCareProduct1 = new PersonalCareProduct("123", "Skin Care", 999, "1 year");
personalCareProduct1.totalPrice(2);
