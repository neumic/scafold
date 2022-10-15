import { AbstractUIMessage } from "./AbstractUIMessage.js";

export class BoxCheckedMessage extends AbstractUIMessage {
    constructor() {
        super("BoxCheckedMessage");
    }

    public static recognize(message: AbstractUIMessage): message is BoxCheckedMessage {
        return message.messageName() === "BoxCheckedMessage";
    }
}