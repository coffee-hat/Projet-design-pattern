import { IMotionSensor, IRadarSensor, MotionSencorA, MotionSensorB} from "./Data";

export interface IAbstractFactory {
    createProductA(): IMotionSensor;

    createProductB(): IRadarSensor;
}

const Manufacturer ={
    A: 'Aegis',
    B: 'RSI',
    C: 'Anvil'
}

export class ConcreteFactory1 implements IAbstractFactory {
    public createProductA(): IMotionSensor {
        return new MotionSencorA(Manufacturer.A);
    }

    public createProductB(): IRadarSensor {
        return new MotionSensorB(Manufacturer.A);
    }
}


/*
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.tableInfo());
    console.log(productB.moreTableInfo());
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
*/