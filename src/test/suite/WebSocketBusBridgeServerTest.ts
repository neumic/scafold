import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { UIMessageBus } from "../../ts/Message/UIMessageBus.js";
import { WebSocketBusBridgeServer } from "../../ts/Message/WebSocketBusBridgeServer.js";
import { assertEquals, assertNotNull } from "../Asserts.js";
import { MockWebSocket } from "../mocks/MockWebSocket.js";
import { MockWebSocketServer } from "../mocks/MockWebSocketServer.js";
import { TestCase } from "../TestCase.js";

export class WebSocketBusBridgeServerTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function passesMessagesToBus() {
                const mockWebSocketServer = new MockWebSocketServer();
                const mockWebSocket = new MockWebSocket();
                const messageBus = new UIMessageBus;

                const webSocketBusBridgeServer = new WebSocketBusBridgeServer(mockWebSocketServer, messageBus);

                assertNotNull(mockWebSocketServer.onConnectParameter)(mockWebSocket, "message???");

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
                assertNotNull(mockWebSocket.onMessage);
                if (mockWebSocket.onMessage != null) {
                    mockWebSocket.onMessage(messageEvent);
                }
                assertEquals(2, messageRecievedOnBus.length);
                assertEquals(message2, messageRecievedOnBus[1]);
            },

            function sendsMessagesFromBus() {
            }
        ];
    }
}

class TestMessage extends AbstractUIMessage {
}