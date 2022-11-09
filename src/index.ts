/*adapter / commande / Abstract factory / singletone / Observer*/
import { IAbstractFactory, ConcreteFactory1 } from './AbstractFactory';
import { StarShip } from './StarShip'
import {IObserver, IEventManager, EventManager, } from './Observer';

const factory = new ConcreteFactory1()
const subject = new EventManager();

function message(message: string){
    starShip.cockpitMessage(message);
}

class Observer implements IObserver {
    public update(subject: IEventManager): void {
        message("Global info : Sensors equipers");
    }
}

const motionSensor = factory.createProductA(); // creation Sensors
const radarSensor = factory.createProductB();

console.log(motionSensor.manufacturer);
console.log(radarSensor.manufacturer);

//Evenement
const observer1 = new Observer();
subject.attach(observer1);


const starShip = new StarShip("FTL", 10, subject);  // creation starShip
message("Initialisation ...");


//ajoute des Sensor au vaisseaux
starShip.addComponent(motionSensor);
starShip.addComponent(motionSensor);


