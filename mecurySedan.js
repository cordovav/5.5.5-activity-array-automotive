//this includes the vehicle class as a module
const VehicleModule = require("vehicle.js")


//Create a Car class that extends the Vehicle class (located in the vehicle.js).
class car extends VehicleModule {
    //Add constructor
    constructor(make, model, year, color, mileage){
        //added super keyword to call parent class constructor
        super(make, model, year, color, mileage);
        //added the properties 
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
//Add the methods with psuedo logic

//added load passanger method
loadPassenger(num){
    if(this.passengers < this.maximumPassenger);
    console.log("There is room for more passengers");
    return availableRoom == true;
}

//added the start method
start() {
    if (this.fuel > 0) {
        console.log("engine started...!!!");
        return this.started = true;
    } else {
        console.log("engine cannot start...");
        return this.started = false;
    }
}
//added schedule service method
scheduleService(mileage){
    if(this.mileage > 3000 );
    console.log("time for maintenance");
    return scheduleService = true;
}
}


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
