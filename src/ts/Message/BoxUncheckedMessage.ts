import { AbstractMessage } from "./AbstractMessage.js";

export class BoxUncheckedMessage extends AbstractMessage {
    constructor() {
        super("BoxUncheckedMessage");
    }

    public static recognize(message: AbstractMessage): message is BoxUncheckedMessage {
        return message.messageName() === "BoxUncheckedMessage";
    }
}