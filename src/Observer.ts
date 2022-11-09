export interface IEventManager {
    // Attach an observer to the subject.
    attach(observer: IObserver): void;
    // Detach an observer from the subject.
    detach(observer: IObserver): void;
    // Notify all observers about an event.
    notify(): void;
}
export interface IObserver {
    // Receive update from subject.
    update(subject: IEventManager): void;
}

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export class EventManager implements IEventManager {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    public state: number;

    /**
     * @type {IObserver[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private observers: IObserver[] = [];

    /**
     * The subscription management methods.
     */
    public attach(observer: IObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}


