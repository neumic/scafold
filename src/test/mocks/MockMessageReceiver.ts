import { AbstractMessage } from "../../ts/Message/AbstractMessage.js";
import { IMessageReceiver } from "../../ts/Message/Bus/IMessageReceiver.js";

export class MockMessageReceiver implements IMessageReceiver {
    messagesReceived: AbstractMessage[] = [];
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    receive(message: AbstractMessage): void {
        this.messagesReceived.push(message);
    }
    getBusId(): number {
        return this.id;
    }
}