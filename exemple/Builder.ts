import { DecoratorA, DecoratorB, DecoratorObservator, VeryLegacyCode } from "./decorator";
import { Observer } from "./EventManager";

/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
 interface Builder {
    reset(): void;
    producePartA(): void;
    producePartB(): void;
}

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have several
 * variations of Builders, implemented differently.
 */
export class ConcreteBuilder1 implements Builder {
    private product: VeryLegacyCode;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new VeryLegacyCode();
    }

    public producePartA(): void {
        this.product = new DecoratorA(this.product);
    }

    public producePartB(): void {
        this.product = new DecoratorB(this.product);
    }

    public getProduct(): VeryLegacyCode & Observer{
        const result = new DecoratorObservator(this.product);
        this.reset();
        return result;
    }
}

// class Product1 {
//     public parts: string[] = [];

//     public listParts(): void {
//         console.log(`Product parts: ${this.parts.join(', ')}\n`);
//     }
// }

export class Director {
    private builder: Builder;

    /**
     * The Director works with any builder instance that the client code passes
     * to it. This way, the client code may alter the final type of the newly
     * assembled product.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * The Director can construct several product variations using the same
     * building steps.
     */
    public buildA(): void {
        this.builder.producePartA();
    }

    public buildB(): void {
        this.builder.producePartB();
    }
}

/*
function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);*/