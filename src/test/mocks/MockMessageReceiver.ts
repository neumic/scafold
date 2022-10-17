import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { IMessageReceiver } from "../../ts/Message/IMessageReceiver.js";

export class MockMessageReceiver implements IMessageReceiver {
    messagesReceived: AbstractUIMessage[] = [];
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    receive(message: AbstractUIMessage): void {
        this.messagesReceived.push(message);
    }
    getBusId(): number {
        return this.id;
    }
}