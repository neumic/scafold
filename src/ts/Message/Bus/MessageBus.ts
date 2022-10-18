import { AbstractMessage } from "../AbstractMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";
import { IMessageReceiver } from "./IMessageReceiver.js";
import { IMessageBus } from "./IMessageBus.js";

export class MessageBus implements IMessageBus {
    private receivers: IMessageReceiver[] = [];

    registerReceiver(receiver: IMessageReceiver): void {
        this.receivers.push(receiver);
    }

    send(message: AbstractMessage, sender: IBusEndpoint): void {
        console.debug("Message Sent: ", message);
        this.receivers.forEach((receiver) => {
            if (receiver.getBusId() !== sender.getBusId()) {
                receiver.receive(message);
            }
        });
    }
}