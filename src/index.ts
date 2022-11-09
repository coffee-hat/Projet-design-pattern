/*Abstract factory / Observer / singleton / adapter / commande*/
import { ManufacturerA_Factory } from './AbstractFactory';
import { StarShip } from './StarShip'
import {IObserver, EventManager, } from './Observer';

const factory = new ManufacturerA_Factory()
const eventManager = EventManager.getInstance();

function message(message: string){
    starShip.cockpitMessage(message);
}

class Observer implements IObserver {
    public update(data: string): void {
        //si equiper message
        message("Global info [ " + data + " is equipped ]");

        //si activer message
    }
}

//Event
const observer = new Observer();
eventManager.on("add-component", observer);


// creation Sensors
const motionSensor = factory.createMotionSensor(); 
const radarSensor = factory.createRadarSensor();

// creation starShip
const starShip = new StarShip("FTL", 10); 
message("Initialisation ...");


//ajoute des Sensor au vaisseaux
starShip.addComponent(motionSensor);
motionSensor.Equipped();
starShip.addComponent(radarSensor);
radarSensor.Equipped();

//TODO mettre un adapter sur la communication des Sensors

