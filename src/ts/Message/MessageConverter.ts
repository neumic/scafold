import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { BoxCheckedMessage } from "./BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "./BoxUncheckedMessage.js";

export class MessageConverter {
    convert(jsonString: string): AbstractUIMessage | null {
        try {
            const jsonObject = JSON.parse(jsonString);

            if (jsonObject._name === "BoxCheckedMessage") {
                return new BoxCheckedMessage();
            } else if (jsonObject._name === "BoxUncheckedMessage") {
                return new BoxUncheckedMessage();
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
};