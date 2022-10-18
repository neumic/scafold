import { BoxCheckedMessage } from "../../ts/Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "../../ts/Message/BoxUncheckedMessage.js";
import { MessageConverter } from "../../ts/Message/MessageConverter.js";
import { assertNotNull, assertNull, assertTrue } from "../scaffold/Asserts.js";
import { TestCase } from "../scaffold/TestCase.js";

export class MessageConverterTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testConvertsBoxCheckedMessages() {
                const messageConverter = new MessageConverter();

                const jsonString = '{ "_name": "BoxCheckedMessage" }';

                const message = messageConverter.convert(jsonString);
                if (assertNotNull(message)) {
                    assertTrue(BoxCheckedMessage.recognize(message));
                }
            },

            function testConvertsBoxUncheckedMessages() {
                const messageConverter = new MessageConverter();

                const jsonString = '{ "_name": "BoxUncheckedMessage" }';

                const message = messageConverter.convert(jsonString);
                if (assertNotNull(message)) {
                    assertTrue(BoxUncheckedMessage.recognize(message));
                }
            },

            function testSomeGarbageJson() {
                const messageConverter = new MessageConverter();

                let jsonString = '{ "_name": "invalid name" }';

                assertNull(messageConverter.convert(jsonString));

                jsonString = '{ "_wrong_name": "BoxUncheckedMessage" }';

                assertNull(messageConverter.convert(jsonString));

                jsonString = '{}';

                assertNull(messageConverter.convert(jsonString));

                jsonString = '"{';

                assertNull(messageConverter.convert(jsonString));

                jsonString = 'alert("plz dont eval");';

                assertNull(messageConverter.convert(jsonString));
            }
        ];
    }
}