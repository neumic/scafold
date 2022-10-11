import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";
import { IMessageReceiver } from "./IMessageReceiver.js";

export class UIMessageBus {
    private registeredMethods: ((message: AbstractUIMessage) => void)[] = [];
    receivers: IMessageReceiver[] = [];

    registerMethod(method: (message: AbstractUIMessage) => void): void {
        this.registeredMethods.push(method);
    }

    registerReceiver(receiver: IMessageReceiver) {
        this.receivers.push(receiver);
    }

    send(message: AbstractUIMessage, sender: IBusEndpoint): void {
        console.debug("Message Sent: ", message);
        this.registeredMethods.forEach(method => method(message));
        this.receivers.forEach((receiver) => {
            if (receiver.getBusId() !== sender.getBusId()) {
                receiver.receive(message);
            }
        });
    }
}