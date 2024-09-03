class Cylinder {
    volume;
    radius;
    height;

    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volumeCylinder() {
        this.volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        console.log(this.volume.toFixed(4)); // It makes the 4 number output only after decimal.
    }
}

const volumeCylinders = new Cylinder(7,7);
volumeCylinders.volumeCylinder();
