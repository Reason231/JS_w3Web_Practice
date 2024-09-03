//  Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.


class Animal{
    species;
    sound;

    constructor(species,sound){
        this.species=species;
        this.sound=sound;
    }

 animalsSound(){
    console.log(`The animal sound ${this.sound}`)
 }   
}

class Dog extends Animal{
    color;
    constructor(species,sound,color){
        super(species,sound)
        this.color=color;
    }

    animalsSound() {
        console.log(`The ${this.color} dog makes a ${this.sound} sound`);
    }

}

const Dog1=new Dog ("Dog","Bark","Orange")
Dog1.animalsSound()