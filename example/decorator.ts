import { EventManager, Observer } from "./EventManager"

export interface VeryLegacy{
    veryComplex(): string;
}

export class VeryLegacyCode implements VeryLegacy {
    veryComplex(): string {
        return "Im very Legacy Code";
    }
}

export class Decorator implements VeryLegacy {
    protected component: VeryLegacy;
    constructor(veryLegacy: VeryLegacy){
        this.component = veryLegacy;
    }

    public veryComplex(): string{
        return this.component.veryComplex();
    }
}

export class DecoratorA extends Decorator{
    public veryComplex(): string {
        return `DecoratorA(${super.veryComplex()})`;
    }
}

export class DecoratorB extends Decorator{
    public veryComplex(): string {
        return `DecoratorB(${super.veryComplex()})`;
    }
}

export class DecoratorObservator extends Decorator implements Observer{
    public veryComplex(): string {
        return super.veryComplex();
    }
    update() {
        console.log(this.veryComplex());
    }
}

export class DecoratorObeserver extends Decorator{
    public veryComplex(): string {
        return `DecoratorB(${super.veryComplex()})`;
    }
}

