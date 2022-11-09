export interface IMotionSensor{
    manufacturer: String;
    isActivat: boolean;
}

export interface IRadarSensor{
    manufacturer: String;
    isActivat: boolean;
}

export class MotionSencorA implements IMotionSensor{
    manufacturer: String;
    isActivat: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
    }
}

export class MotionSensorB implements IMotionSensor{
    manufacturer: String;
    isActivat: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
    }
}
export class MotionSensorC implements IMotionSensor{
    manufacturer: String;
    isActivat: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
    }
}

export class RadarSensorA implements IRadarSensor{
    manufacturer: String;
    isActivat: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
    }
}

export class RadarSensorB implements IRadarSensor{
    manufacturer: String;
    isActivat: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
    }
}

export class RadarSensorC implements IRadarSensor{
    manufacturer: String;
    isActivat: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
    }
}
