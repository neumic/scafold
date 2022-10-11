import { AbstractUIMessage } from "./AbstractUIMessage.js";

export class SocketMessage extends AbstractUIMessage {
    constructor(serializedMessage: string) {
        const parsedMessage = JSON.parse(serializedMessage);
        if (typeof parsedMessage._name == 'string') {
            super(parsedMessage._name);
        } else {
            super("unknown message");
        }
    }
}