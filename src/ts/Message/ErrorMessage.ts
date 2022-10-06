import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export class ErrorMessage extends AbstractUIMessage {
    public error: Error;

    constructor(error: Error, messageSender: IBusEndpoint) {
        super("ErrorMessage", messageSender);
        this.error = error;
    }

    public static recognize(message: AbstractUIMessage): message is ErrorMessage {
        return message.messageName() === "ErrorMessage";
    }
}