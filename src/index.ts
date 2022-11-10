/*Abstract factory / Observer / singleton / adapter / commande*/
import { ManufacturerA_Factory } from './AbstractFactory';
import { StarShip } from './StarShip'
import {IObserver, EventManager, } from './Observer';
import { Message, EncrypMessage, Adapter } from './Adapter'

const factory = new ManufacturerA_Factory()
const eventManager = EventManager.getInstance();

const sendMessage = new Message();
const adapter = new Adapter(new EncrypMessage);

class Observer implements IObserver {
    public update(data: Map<string, string>): void {
        //si equiper message
        if(data.has("Motion")) sendMessage.request(data.get("Motion"));
        if(data.has("Radar")) adapter.request(data.get("Radar"));

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
StarShip.setInstance("FTL", 10);
const starShip = StarShip.getInstance(); 
starShip.cockpitMessage("Initialisation ...");

//ajoute des Sensor au vaisseaux
starShip.addComponent(motionSensor);
motionSensor.Equipped();
starShip.addComponent(radarSensor);
radarSensor.Equipped();

//TODO command pattern

