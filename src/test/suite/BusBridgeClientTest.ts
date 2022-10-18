import { AbstractMessage } from "../../ts/Message/AbstractMessage.js";
import { MessageBus } from "../../ts/Message/Bus/MessageBus.js";
import { BusBridgeClient as BusBridgeClient } from "../../ts/Message/Bus/BusBridgeClient.js";
import { MockWebSocket } from "../mocks/MockWebSocket.js";
import { TestCase } from "../scaffold/TestCase.js";
import { IBusEndpoint } from "../../ts/Message/Bus/IBusEndpoint.js";
import { BoxCheckedMessage } from "../../ts/Message/BoxCheckedMessage.js";
import { MockMessageReceiver } from "../mocks/MockMessageReceiver.js";
import { assertEquals, assertNotNull } from "../scaffold/Asserts.js";

export class BusBridgeClientTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testConnectsToServer() {
                const mockWebSocket = new MockWebSocket();
                const messageBus = new MessageBus;

                const websocketClient = new BusBridgeClient(mockWebSocket, messageBus);
                const messageSender = new TestMessageSender;

                const message1 = new TestMessage("test1");
                const message2 = new BoxCheckedMessage();

                const messageReceiver = new MockMessageReceiver(1);
                messageBus.registerReceiver(messageReceiver);

                messageBus.send(message1, messageSender);

                assertEquals(1, mockWebSocket.messagesSent.length);
                assertEquals(JSON.stringify(message1), mockWebSocket.messagesSent[0]);

                const messageEvent = new MessageEvent<string>("type", { data: JSON.stringify(message2) });

                if (assertNotNull(mockWebSocket.onMessage)) {
                    mockWebSocket.onMessage(messageEvent);
                }

                assertEquals(2, messageReceiver.messagesReceived.length);
                assertEquals(message2.messageName, messageReceiver.messagesReceived[1].messageName);
            },

            function testReceivingNonUIMessages() {
                const mockWebSocket = new MockWebSocket();
                const messageBus = new MessageBus;

                const websocketClient = new BusBridgeClient(mockWebSocket, messageBus);
                const messageSender = new TestMessageSender;

                const messageReceiver = new MockMessageReceiver(1);
                messageBus.registerReceiver(messageReceiver);

                const messageEvent = new MessageEvent<string>("type", { data: "Def not a message, tho" });

                if (assertNotNull(mockWebSocket.onMessage)) {
                    mockWebSocket.onMessage(messageEvent);
                }
                assertEquals(0, messageReceiver.messagesReceived.length);
            }
        ];
    }
}

class TestMessage extends AbstractMessage {
}

class TestMessageSender implements IBusEndpoint {
    getBusId(): number {
        return 0;
    }
}