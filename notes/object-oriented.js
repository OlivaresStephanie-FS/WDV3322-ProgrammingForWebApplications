//What is an Object?

class Vehicle {} // Defines a class named "Vehicle"
class Car {} // Defines a class named "Car"
class Truck {} // Defines a class named "Car" and "Truck"

// Class Instantiation:

const vehicle = new Vehicle(); // Creates an instance of "Vehicle"
const car = new Car(); // Creates an instance of "Car"
const truck = new Truck(); // Creates an instance of "Truck"
console.log(vehicle, car, truck);
// Output -> Vehicle {} Car {} Truck {}

// Class Properties
class VehicleTwo {
	// Defines a class named "VehicleTwo"
	year; // Declares a property named "year" for the class
	make; // Declares a property named "make" for the class
	model; // Declares a property named "model" for the class
}
console.log(VehicleTwo);
// Output -> Vehicle { year: undefined ... }

// Using Class Property Defaults

class ThirdVehicle {
	// Defines a class named "Vehicle"
	year = 2015;
	make = "Toyota";
	model = "Camry";
}
const thirdVehicle = new Vehicle(); // Creates an instance of "Vehicle"
console.log(thirdVehicle);
// -> Vehicle { year: 2015, make: 'Toyota', model: 'Camry' }

// Using Dot Notation to Set Properties
class FourthVehicle {
	// Defines a class named "Vehicle"
	year; // Declares a property named "year" for the class
	make; // Declares a property named "make" for the class
	model; // Declares a property named "model" for the class
}
const fourthVehicle = new Vehicle(); // Creates an instance of "Vehicle"
fourthVehicle.year = 2020; // Sets the "year" property of the "vehicle" instance to 2020 using dot notation
fourthVehicle.make = "Honda"; // Sets the "make" property of the "vehicle" instance to "Honda" using dot notation
fourthVehicle.model = "Civic"; // Sets the "model" property of the "vehicle" instance to "Civic" using dot notation
console.log(fourthVehicle);
// Output -> Vehicle { year: 2020, make: 'Honda', model: 'Civic' }

// Using a Class Constructor to Set Properties
class FifthVehicle {
	// Defines a class named "Vehicle"
	constructor(year, make, model) {
		// Defines a constructor method that takes three parameters: "year", "make", and "model"
		this.year = year; // Sets the "year" property of the instance to the value of the "year" parameter
		this.make = make; // Sets the "make" property of the instance to the value of the "make" parameter
		this.model = model; // Sets the "model" property of the instance to the value of the "model" parameter
	}
}
const fifthVehicle = new Vehicle(2022, "Ford", "Mustang"); // Creates an instance of "Vehicle" with specific values for year, make, and model using the constructor
console.log(fifthVehicle);
// Output -> Vehicle { year: 2022, make: 'Ford', model: 'Mustang' }

// Defining Class Methods
class SixthVehicle {
	// Defines a class named "Vehicle"
	constructor(year, make, model) {
		// Defines a constructor method that takes three parameters: "year", "make", and "model"
		this.year = year; // Sets the "year" property of the instance to the value of the "year" parameter
		this.make = make; // Sets the "make" property of the instance to the value of the "make" parameter
		this.model = model; // Sets the "model" property of the instance to the value of the "model" parameter
	}
	displayInfo() {
		// Defines a method named "displayInfo" for the class
		console.log(
			`Year: ${this.year}, Make: ${this.make}, Model: ${this.model}`,
		); // Logs a string containing the year, make, and model of the vehicle to the console
	}
}

// How Do We Inherit Properties and Methods from Another Class?
class SeventhVehicle {
    // Defines a class named "Vehicle"
    constructor(year, make, model) {
        // Defines a constructor method that takes three parameters: "year", "make", and "model"
        this.year = year; // Sets the "year" property of the instance to the value of the "year" parameter
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        // Defines a method named "displayInfo" for the class
        console.log(`Year: ${this.year}, Make: ${this.make}, Model: ${this.model}`);
    }
}
class CarTwo extends SeventhVehicle {
    // Defines a class named "Car" that extends the "Vehicle" class, inheriting its properties and methods
    constructor(year, make, model, numDoors) {
        // Defines a constructor method that takes four parameters: "year", "make", "model", and "numDoors"
