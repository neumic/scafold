import { ErrorMessage } from "../../ts/Message/ErrorMessage.js";
import { assertTrue } from "../Asserts.js";
import { TestCase } from "../TestCase.js";

export class UIMessageTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function messageTypesRegcognize() {
                let uiMessage = new ErrorMessage(new Error());
                assertTrue(ErrorMessage.recognize(uiMessage));
                //assertFalse(AnotherMessageType.recognize(uiMessage));
            }
        ];
    }
}
