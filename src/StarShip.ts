
export class StarShip{
    name : string;
    components: Object[];
    shieldsOn: boolean;
    missileStock: number;

    constructor(name: string, missilCount: number){
        this.name = name;
        this.shieldsOn = true;
        this.missileStock = missilCount;
        this.components = [];
    }
    
    addComponent(component){
        this.components.push(component);
    }

    cockpitMessage(message: string){
        console.log(this.name + " message : " + message);
    }

    turnOffShields(){}

    fireMissils(){

    }
}