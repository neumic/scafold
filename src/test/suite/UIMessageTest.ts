import { ErrorMessage } from "../../ts/Message/ErrorMessage.js";
import { assertTrue } from "../Asserts.js";
import { MockMessageSender } from "../mocks/MockMessageSender.js";
import { TestCase } from "../TestCase.js";

export class UIMessageTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function messageTypesRegcognize() {
                let uiMessage = new ErrorMessage(new Error(), new MockMessageSender);
                assertTrue(ErrorMessage.recognize(uiMessage));
                //assertFalse(AnotherMessageType.recognize(uiMessage));
            }
        ];
    }
}
