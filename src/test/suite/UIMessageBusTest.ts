import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { ErrorMessage } from "../../ts/Message/ErrorMessage.js";
import { UIMessageBus } from "../../ts/Message/UIMessageBus.js";
import { assertEquals } from "../Asserts.js";
import { TestCase } from "../TestCase.js";

export class UIMessageBusTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function registerAndSend() {
                const messagesSent1: AbstractUIMessage[] = [];
                const messagesSent2: AbstractUIMessage[] = [];

                const messageBus = new UIMessageBus();

                messageBus.register((message) => {
                    messagesSent1.push(message);
                });
                messageBus.register((message) => {
                    messagesSent2.push(message);
                });

                const message1 = new MockMessage("");
                const message2 = new ErrorMessage(new Error);
                messageBus.send(message1);
                messageBus.send(message2);

                assertEquals(2, messagesSent1.length);
                assertEquals(message1, messagesSent1[0]);
                assertEquals(message2, messagesSent1[1]);

                assertEquals(2, messagesSent2.length);
                assertEquals(message1, messagesSent1[0]);
                assertEquals(message2, messagesSent1[1]);
            }
        ];
    }
}

class MockMessage extends AbstractUIMessage {
}