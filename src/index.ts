//import
import { ManufacturerA_Factory } from './AbstractFactory';
import { StarShip } from './StarShip'
import {IObserver, EventManager, } from './Observer';
import { Message, EncrypMessage, Adapter } from './Adapter'
import { Invoker, Receiver, ShieldsCommand, MissilesCommand, RadarSensorCommand, MotionSensorCommand} from './Command'

//Constants Global **********************************
const STARSHIP_NAME = 'FTL';
const MISSILES_COUNT: number = 10;
const MANUFACTURE_TYPE = new ManufacturerA_Factory();

//***************************************************

//factory pour les sensors
const factory = MANUFACTURE_TYPE;

//observer pour les evenements
const eventManager = EventManager.getInstance();

const sendMessage = new Message();
const adapter = new Adapter(new EncrypMessage);

class Observer implements IObserver {
    public update(data: Map<string, string>): void {
        //si equiper message
        if(data.has("Motion")) sendMessage.request(data.get("Motion"));
        if(data.has("Radar")) adapter.request(data.get("Radar"));
    }
}

//Event
const observer = new Observer();
eventManager.on("add-component", observer);

// creation Sensors
const motionSensor = factory.createMotionSensor(); 
const radarSensor = factory.createRadarSensor();

// creation starShip
StarShip.setInstance(STARSHIP_NAME, MISSILES_COUNT);
const starShip = StarShip.getInstance(); 
starShip.cockpitMessage("Initialisation ...");

//ajoute des Sensor au vaisseaux
starShip.addComponent("motionSensor", motionSensor);
motionSensor.Equipped();
starShip.addComponent("radarSensor", radarSensor);
radarSensor.Equipped();

starShip.cockpitMessage(`decollage... \n le starship ${starShip.name} est dans l'espace\n`);


//command pattern
const invoker = new Invoker();
const receiver = new Receiver(starShip);

//active motion sensor
invoker.setOnStart(new MotionSensorCommand(receiver, true));
invoker.commandExecute();

//shield on
invoker.setOnStart(new ShieldsCommand(starShip));
invoker.commandExecute();

//active heat sensor => real threat
invoker.setOnStart(new RadarSensorCommand(receiver, true));
invoker.commandExecute();

//turn off shield
starShip.cockpitMessage("real threat detected, combat mode engaging")
invoker.setOnStart(new ShieldsCommand(starShip));
invoker.commandExecute();


//send missiles
invoker.setOnStart(new MissilesCommand(receiver, 3));
invoker.commandExecute();
