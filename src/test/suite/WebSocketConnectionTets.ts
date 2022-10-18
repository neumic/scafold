import { AbstractMessage } from "../../ts/Message/AbstractMessage.js";
import { WebSocketConnection } from "../../ts/WebSocket/WebSocketConnection.js";
import { MockWebSocket } from "../mocks/MockWebSocket.js";
import { assertEquals, assertNotEquals } from "../scaffold/Asserts.js";
import { TestCase } from "../scaffold/TestCase.js";

export class WebSocketConnectionTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testSendsMessages() {
                const webMocketWrapper = new MockWebSocket();
                const connection = new WebSocketConnection(webMocketWrapper);

                const message = new TestMessage("this is a test");

                connection.receive(message);

                assertEquals(1, webMocketWrapper.messagesSent.length);
                assertEquals('{"_name":"this is a test"}', webMocketWrapper.messagesSent[0]);
            },
            function testBusId() {
                const connection1 = new WebSocketConnection(new MockWebSocket());
                const connection2 = new WebSocketConnection(new MockWebSocket());

                assertEquals(connection1.getBusId(), connection1.getBusId());
                assertNotEquals(connection1.getBusId(), connection2.getBusId());
            }
        ];
    }
}

class TestMessage extends AbstractMessage {
}