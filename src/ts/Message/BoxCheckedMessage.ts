import { AbstractMessage } from "./AbstractMessage.js";

export class BoxCheckedMessage extends AbstractMessage {
    constructor() {
        super("BoxCheckedMessage");
    }

    public static recognize(message: AbstractMessage): message is BoxCheckedMessage {
        return message.messageName() === "BoxCheckedMessage";
    }
}