import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { UIMessageBus } from "../../ts/Message/UIMessageBus.js";
import { BusBridgeServer } from "../../ts/Message/BusBridgeServer.js";
import { GenericMessageEvent } from "../../ts/WebSocket/IWebSocketWrapper.js";
import { assertEquals, assertNotNull } from "../Asserts.js";
import { MockWebSocket } from "../mocks/MockWebSocket.js";
import { MockWebSocketServer } from "../mocks/MockWebSocketServer.js";
import { TestCase } from "../TestCase.js";
import { MockMessageSender } from "../mocks/MockMessageSender.js";
import { MockMessageReceiver } from "../mocks/MockMessageReceiver.js";
import { BoxCheckedMessage } from "../../ts/Message/BoxCheckedMessage.js";

export class BusBridgeServerTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function passesMessagesToBus() {
                const mockWebSocketServer = new MockWebSocketServer();
                const firstConnection = new MockWebSocket();
                const secondConnection = new MockWebSocket();
                const thirdConnection = new MockWebSocket();
                const messageBus = new UIMessageBus;

                const message1 = new TestMessage("test1");
                const message2 = new BoxCheckedMessage();

                const messageReceiver = new MockMessageReceiver(1);
                messageBus.registerReceiver(messageReceiver);

                const busBridgeServer = new BusBridgeServer(mockWebSocketServer, messageBus);

                if (assertNotNull(mockWebSocketServer.onConnectParameter)) {
                    mockWebSocketServer.onConnectParameter(firstConnection);
                    mockWebSocketServer.onConnectParameter(secondConnection);
                    mockWebSocketServer.onConnectParameter(thirdConnection);
                }

                messageBus.send(message1, new MockMessageSender);

                assertEquals(1, firstConnection.messagesSent.length);
                assertEquals(JSON.stringify(message1), firstConnection.messagesSent[0]);
                assertEquals(1, secondConnection.messagesSent.length);
                assertEquals(JSON.stringify(message1), secondConnection.messagesSent[0]);
                assertEquals(1, thirdConnection.messagesSent.length);
                assertEquals(JSON.stringify(message1), thirdConnection.messagesSent[0]);

                //TODO: make this line not weird
                const messageEvent: GenericMessageEvent = { data: JSON.stringify(message2) };
                if (assertNotNull(firstConnection.onMessage)) {
                    firstConnection.onMessage(messageEvent);
                }

                assertEquals(2, messageReceiver.messagesReceived.length);

                assertEquals(1, firstConnection.messagesSent.length);
                assertEquals(2, secondConnection.messagesSent.length);
                assertEquals(JSON.stringify(message2), secondConnection.messagesSent[1]);
                assertEquals(2, thirdConnection.messagesSent.length);
                assertEquals(JSON.stringify(message2), thirdConnection.messagesSent[1]);
            }
        ];
    }
}

class TestMessage extends AbstractUIMessage {
}