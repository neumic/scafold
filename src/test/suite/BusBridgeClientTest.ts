import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { UIMessageBus } from "../../ts/Message/UIMessageBus.js";
import { BusBridgeClient as BusBridgeClient } from "../../ts/Message/BusBridgeClient.js";
import { assertEquals, assertNotNull, fail } from "../Asserts.js";
import { MockWebSocket } from "../mocks/MockWebSocket.js";
import { TestCase } from "../TestCase.js";
import { IBusEndpoint } from "../../ts/Message/IBusEndpoint.js";

export class BusBridgeClientTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testConnectsToServer() {
                const mockWebSocket = new MockWebSocket();
                const messageBus = new UIMessageBus;

                const websocketClient = new BusBridgeClient(mockWebSocket, messageBus);
                const messageSender = new TestMessageSender;

                const message1 = new TestMessage("test1");
                const message2 = new TestMessage("test2");
                const messageRecievedOnBus: AbstractUIMessage[] = [];
                messageBus.registerMethod((message) => {
                    messageRecievedOnBus.push(message);
                });

                messageBus.send(message1, messageSender);

                assertEquals(1, mockWebSocket.messagesSent.length);
                assertEquals(JSON.stringify(message1), mockWebSocket.messagesSent[0]);

                const messageEvent = new MessageEvent<string>("type", { data: JSON.stringify(message2) });
                assertNotNull(mockWebSocket.onMessage);
                if (mockWebSocket.onMessage != null) {
                    mockWebSocket.onMessage(messageEvent);
                }
                assertEquals(2, messageRecievedOnBus.length);
                console.log(messageRecievedOnBus[1] as AbstractUIMessage);

                assertEquals(message2.messageName, messageRecievedOnBus[1].messageName);
            },

            function testReceivingNonUIMessages() {
                fail();
            }
        ];
    }
}

class TestMessage extends AbstractUIMessage {
}

class TestMessageSender implements IBusEndpoint {
    getBusId(): number {
        return 0;
    }
}