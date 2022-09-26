import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { UIMessageBus } from "../../ts/Message/UIMessageBus.js";
import { WebSocketClient } from "../../ts/Message/WebSocketClient.js";
import { assertEquals, assertNotNull, fail } from "../Asserts.js";
import { MockWebSocket } from "../mocks/MockWebSocket.js";
import { TestCase } from "../TestCase.js";

export class WebSocketClientTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testConnectsToServer() {
                const mockWebSocket = new MockWebSocket();
                const messageBus = new UIMessageBus;

                const websocketClient = new WebSocketClient(mockWebSocket, messageBus);

                const message1 = new TestMessage("test1");
                const message2 = new TestMessage("test2");
                const messageRecievedOnBus: AbstractUIMessage[] = [];
                messageBus.register((message) => {
                    messageRecievedOnBus.push(message);
                });

                messageBus.send(message1);

                assertEquals(1, mockWebSocket.messagesSent.length);
                assertEquals(JSON.stringify(message1), mockWebSocket.messagesSent[0]);

                const messageEvent = new MessageEvent<AbstractUIMessage>("type", { data: message2 });
                assertNotNull(mockWebSocket.onmessage);
                if (mockWebSocket.onmessage != null) {
                    mockWebSocket.onmessage(messageEvent);
                }
                assertEquals(2, messageRecievedOnBus.length);
                assertEquals(message2, messageRecievedOnBus[1]);
            },

            function testReceivingNonUIMessages() {
                fail();
            }
        ];
    }
}

class TestMessage extends AbstractUIMessage {
}