export class StarShip{
    private static instance: StarShip;

    name : string;
    components: Object[];
    shieldsOn: boolean;
    missileStock: number;

    private constructor(name: string, missilCount: number){
        this.name = name;
        this.shieldsOn = true;
        this.missileStock = missilCount;
        this.components = [];
    }

    public static getInstance(): StarShip{
        if(!StarShip.instance){
            console.log("You don't have a starShip");
        }
        return StarShip.instance;
    }

    public static setInstance(name: string, missilCount: number): void{
        if(StarShip.instance){
            console.log("you can have only 1 starShip");
        }
        StarShip.instance = new StarShip(name, missilCount);
    }
    
    public addComponent(component): void{
        this.components.push(component);
    }

    public cockpitMessage(message: string): void{
        console.log(this.name + " message : " + message);
    }

    turnOffShields(){}

    fireMissils(){

    }
}