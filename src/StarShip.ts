export class StarShip{
    private static instance: StarShip;

    name : string;
    components: Map<string, Object>;;
    shieldsOn: boolean;
    missileStock: number;

    private constructor(name: string, missileCount: number){
        this.name = name;
        this.shieldsOn = false;
        this.missileStock = missileCount;
        this.components = new Map<string, Object>();
    }

    public static getInstance(): StarShip{
        if(!StarShip.instance){
            console.log("You don't have a starShip");
        }
        return StarShip.instance;
    }

    public static setInstance(name: string, missileCount: number): void{
        if(StarShip.instance){
            console.log("you can have only 1 starShip");
        }
        StarShip.instance = new StarShip(name, missileCount);
    }
    
    public addComponent(componentName:string, component:object): void{
        this.components.set(componentName, component);
    }

    public cockpitMessage(message: string): void{
        console.log(this.name + " message : " + message);
    }

    shieldsSystem(){
        this.shieldsOn = !this.shieldsOn;
        if(this.shieldsOn == true){
            this.cockpitMessage(`Shields is now ON`);
        }
        else{
            this.cockpitMessage(`Shields is now OFF`);
        } 
    }

    fireMissiles(count: number){
        if(count > this.missileStock){
            this.cockpitMessage(`you don't have enough missile, missiles stock : ${this.missileStock}`);
        }
        this.missileStock -= count;
        this.cockpitMessage(`${count} missiles use, remained ${this.missileStock}`);

        if(this.missileStock == 0){
            this.cockpitMessage(`ALERT your missiles stock is now empty`);
        }
    }
}