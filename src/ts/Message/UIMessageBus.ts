import { AbstractUIMessage } from "./AbstractUIMessage.js";

export class UIMessageBus {
    private registeredMethods: ((message: AbstractUIMessage) => void)[] = [];

    register(method: (message: AbstractUIMessage) => void): void {
        this.registeredMethods.push(method);
    }

    send(message: AbstractUIMessage): void {
        console.debug("Message Sent: ", message.messageName);
        this.registeredMethods.forEach(method => method(message));
    }
}