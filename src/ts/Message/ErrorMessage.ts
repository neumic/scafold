import { AbstractMessage } from "./AbstractMessage.js";

export class ErrorMessage extends AbstractMessage {
    public error: Error;

    constructor(error: Error) {
        super("ErrorMessage");
        this.error = error;
    }

    public static recognize(message: AbstractMessage): message is ErrorMessage {
        return message.messageName() === "ErrorMessage";
    }
}