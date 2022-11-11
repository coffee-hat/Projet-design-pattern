import {VeryLegacyCode, VeryLegacy, DecoratorA, DecoratorB, DecoratorObservator} from "./decorator";

export const createVeryLegacy = (type: string) => {
    const objects = {
        ['verylegacy']: () => new VeryLegacyCode(),
        ['decoratorA']: () => new DecoratorA(new VeryLegacyCode()),
        ['decoratorB']: () => new DecoratorB( new VeryLegacyCode()),
        ['decoratorAB']: () => new DecoratorB(new DecoratorA(new VeryLegacyCode())),
        ['decoratorO']: () => new DecoratorA(new DecoratorObservator(new VeryLegacyCode))
    }

    return objects[type]();
}

//console.log(createVeryLegacy("decoratorAB").veryComplex());

 
/*
interface ProductFactory{
    createProduct();
}

class ProductAFactory implements ProductFactory{
    createProduct() {
        console.log("creation produit A")
        return new DecoratorA();
    }
}

class ProductBFactory implements ProductFactory{
    createProduct() {
        console.log("creation produit B")
        return new DecoratorB();
    }
}

export class Factory{
    private factories = {};

    constructor(){
        this.factories["produit A"] = new ProductAFactory();
        this.factories["produit B"] = new ProductBFactory();
    }

    public createProduction(productName: string){
        return this. factories[productName].createProduct();
    }
}
*/
