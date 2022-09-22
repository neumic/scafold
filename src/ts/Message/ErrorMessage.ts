import { AbstractUIMessage } from "./AbstractUIMessage.js";

export class ErrorMessage extends AbstractUIMessage {
    public error: Error;

    constructor(error: Error) {
        super("ErrorMessage");
        this.error = error;
    }

    public static recognize(message: AbstractUIMessage): message is ErrorMessage {
        return message.messageName === "ErrorMessage";
    }
}