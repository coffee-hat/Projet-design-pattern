import { StarShip } from './StarShip'
export class Message {
    public request(message : string): void {
        StarShip.getInstance().cockpitMessage(`Global info [ ${message} is equipped ]`);
    }
}

export class EncrypMessage {
    public specificRequest(message: string): string {
        return message;
    }
}

export class Adapter extends Message {
    private msg: EncrypMessage;

    constructor(message: EncrypMessage) {
        super();
        this.msg = message;
    }

    public request(message: string): void {
        const result = this.msg.specificRequest(message).split('').reverse().join('');
        StarShip.getInstance().cockpitMessage(`Global info [ Adapter: (TRANSLATED) ${result} is equipped ]`);
    }
}
/*
function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);*/