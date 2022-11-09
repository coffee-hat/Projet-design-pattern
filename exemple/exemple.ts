import { EventManager, Observer } from "./EventManager";
import { createVeryLegacy } from './Factory';
import { Director, ConcreteBuilder1 } from "./Builder"
import { DecoratorObservator, VeryLegacyCode } from "./decorator";

const eventManager = EventManager.getInstance(); 

//console.log(createVeryLegacy("decoratorO").veryComplex());

const obsererComptable: Observer= {
    update(data){
        console.log("je suis obsererComptable", data);
        if(data.resultat < 4){
            eventManager.emit('reduction salaire', {salaire: 2});
        }
    }
}

const obsererDeveloper: Observer= {
    update(data){
        console.log("je suis obsererDeveloper", data);
        if(data.salaire < 3){
            eventManager.emit("demission", {})
        }
    }
}
const obsererPatron: Observer= {
    update(data){
        console.log("je suis obsererPatron");
    }
}

/*const VeryLegacyObserver = createVeryLegacy("decoratorO");
console.log(VeryLegacyObserver.update);*/


// eventManager.on('reduction salaire', obsererComptable);
// eventManager.on('reduction salaire', obsererDeveloper);
// eventManager.on('demission', obsererPatron);

const director = new Director();
const builder = new ConcreteBuilder1();
const VeryLegacyObserver = builder.getProduct();

director.setBuilder(builder);

console.log('Build A:');
director.buildA();
console.log(builder.getProduct().veryComplex());

console.log('Build B:');
director.buildB();
console.log(builder.getProduct().veryComplex());

eventManager.on('mauvais resultat', VeryLegacyObserver);
eventManager.emit('mauvais resultat', {resultat: 3});
