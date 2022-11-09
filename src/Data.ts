import { EventManager } from "./Observer";
export interface IMotionSensor{
    manufacturer: String;
    isActivate: boolean;
    manager : EventManager;
    Equipped(): void;
}

export interface IRadarSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;
    Equipped(): void;
}

export class MotionSensorA implements IMotionSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.toString())
    }

    toString(){
        return "Motion Sensor of " + this.manufacturer
    }
}

/*export class MotionSensorB implements IMotionSensor{
    manufacturer: String;
    isActivate: boolean;
    isEquipped: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.isEquipped = false;
    }
}
export class MotionSensorC implements IMotionSensor{
    manufacturer: String;
    isActivate: boolean;
    isEquipped: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.isEquipped = false;
    }
}*/

export class RadarSensorA implements IRadarSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.toString())
    }

    toString(){
        return "Radar Sensor of " + this.manufacturer
    }
}

/*export class RadarSensorB implements IRadarSensor{
    manufacturer: String;
    isActivate: boolean;
    isEquipped: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.isEquipped = false;
    }
}

export class RadarSensorC implements IRadarSensor{
    manufacturer: String;
    isActivate: boolean;
    isEquipped: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.isEquipped = false;
    }
    
}*/
