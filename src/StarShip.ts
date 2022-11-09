import { EventManager, IEventManager } from "./Observer";

export class StarShip{
    name : string;
    components: Object[];
    shieldsOn: boolean;
    missilsStock: number;
    manager: IEventManager;
    constructor(name: string, missilCount: number, manager: IEventManager){
        this.name = name;
        this.shieldsOn = true;
        this.missilsStock = missilCount;
        this.components = [];
        this.manager = manager;
    }
    
    addComponent(component){
        console.log("ajout composent");
        this.components.push(component);
        this.isReady();
    }

    isReady(){
        if(this.components.length >= 2){
            this.manager.notify();
        }
    }

    cockpitMessage(message: string){
        console.log(this.name + " message : " + message);
    }

    turnOffShields(){}

    fireMissils(){

    }
}