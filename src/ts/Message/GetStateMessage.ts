import { AbstractMessage } from "./AbstractMessage.js";

export class GetStateMessage extends AbstractMessage {
    constructor() {
        super("GetStateMessage");
    }

    public static recognize(message: AbstractMessage): message is GetStateMessage {
        return message.messageName() === "GetStateMessage";
    }
}