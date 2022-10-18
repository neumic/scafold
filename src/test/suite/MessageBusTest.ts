import { AbstractMessage } from "../../ts/Message/AbstractMessage.js";
import { ErrorMessage } from "../../ts/Message/ErrorMessage.js";
import { MessageBus } from "../../ts/Message/Bus/MessageBus.js";
import { assertEquals } from "../scaffold/Asserts.js";
import { MockMessageReceiver } from "../mocks/MockMessageReceiver.js";
import { TestCase } from "../scaffold/TestCase.js";

export class MessageBusTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function registerAndSend() {
                const receiver1 = new MockMessageReceiver(1);
                const receiver2 = new MockMessageReceiver(2);
                const receiver3 = new MockMessageReceiver(3);
                const messageBus = new MessageBus();

                messageBus.registerReceiver(receiver1);
                messageBus.registerReceiver(receiver2);
                messageBus.registerReceiver(receiver3);

                const message1 = new MockMessage("");
                const message2 = new ErrorMessage(new Error);

                messageBus.send(message1, receiver1);
                messageBus.send(message2, receiver2);

                assertEquals(1, receiver1.messagesReceived.length);
                assertEquals(message2, receiver1.messagesReceived[0]);

                assertEquals(1, receiver2.messagesReceived.length);
                assertEquals(message1, receiver2.messagesReceived[0]);

                assertEquals(2, receiver3.messagesReceived.length);
                assertEquals(message1, receiver3.messagesReceived[0]);
                assertEquals(message2, receiver3.messagesReceived[1]);
            },
        ];
    }
}

class MockMessage extends AbstractMessage {
}