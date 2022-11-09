/*adapter / commande / Abstract factory / singletone / Observer*/
import { IAbstractFactory, ConcreteFactory1 } from './AbstractFactory';
import { StarShip } from './StarShip'

function clientCode(factory: IAbstractFactory) {
    const motionSensor = factory.createProductA();
    const radarSensor = factory.createProductB();

    console.log(motionSensor.manufacturer);
    console.log(radarSensor.manufacturer);
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

const starShip = new StarShip("FTL", 10);
starShip.cockpitMessage("Initialisation ...");
