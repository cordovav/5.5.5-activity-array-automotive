//this includes the vehicle class as a module
//import { Vehicle as VehicleModule } from '.vehicle.js';
const VehicleModule = require("./vehicle.js")

//include .Vehicle to have it extend


//Create a Car class that extends the Vehicle class (located in the vehicle.js).
class Car extends VehicleModule.Vehicle {
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
//added schedule service method

    checkService(){
        if(this.mileage > 3000 ){
            this.scheduleService = true
            console.log("time for maintenance");
            return this.scheduleService;
        }    
    }
    //added the start method
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
            } else {
                console.log("engine cannot start...NO FUEL!");
                return this.started = false;
        }
    }
//added load passanger method
    loadPassenger(num){
        if(this.passengers < this.maximumPassenger){
            if((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
                } else {
                    console.log(this.modle + " " + this.make + "not enough space for all passengers")
                }
            } else {
                console.log(this.model + " " + this.make + "is full");
            }    

        }


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 5000)
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)