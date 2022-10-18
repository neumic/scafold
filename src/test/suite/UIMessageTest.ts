import { AbstractMessage } from "../../ts/Message/AbstractMessage.js";
import { BoxCheckedMessage } from "../../ts/Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "../../ts/Message/BoxUncheckedMessage.js";
import { ErrorMessage } from "../../ts/Message/ErrorMessage.js";
import { assertFalse, assertTrue } from "../scaffold/Asserts.js";
import { TestCase } from "../scaffold/TestCase.js";

export class MessageTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function messageTypesRegcognize() {
                let uiMessage: AbstractMessage = new ErrorMessage(new Error());

                assertTrue(ErrorMessage.recognize(uiMessage));
                assertFalse(BoxCheckedMessage.recognize(uiMessage));
                assertFalse(BoxUncheckedMessage.recognize(uiMessage));

                uiMessage = new BoxCheckedMessage;

                assertFalse(ErrorMessage.recognize(uiMessage));
                assertTrue(BoxCheckedMessage.recognize(uiMessage));
                assertFalse(BoxUncheckedMessage.recognize(uiMessage));

                uiMessage = new BoxUncheckedMessage;

                assertFalse(ErrorMessage.recognize(uiMessage));
                assertFalse(BoxCheckedMessage.recognize(uiMessage));
                assertTrue(BoxUncheckedMessage.recognize(uiMessage));
            }
        ];
    }
}
