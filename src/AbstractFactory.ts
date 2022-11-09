import { IMotionSensor, IRadarSensor, MotionSensorA, RadarSensorA} from "./Data";

export interface IAbstractFactory {
    createMotionSensor(): IMotionSensor;

    createRadarSensor(): IRadarSensor;
}

const ManufacturerList ={
    A: 'Aegis',
    B: 'RSI',
    C: 'Anvil'
}

export class ManufacturerA_Factory implements IAbstractFactory {
    manufacturer: string = ManufacturerList.A;
    public createMotionSensor(): IMotionSensor {
        return new MotionSensorA(this.manufacturer);
    }

    public createRadarSensor(): IRadarSensor {
        return new RadarSensorA(this.manufacturer);
    }
}
