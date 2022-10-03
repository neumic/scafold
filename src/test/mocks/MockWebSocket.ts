import { GenericMessageEvent, IWebSocketWrapper } from "../../ts/WebSocket/IWebSocketWrapper.js";

export class MockWebSocket implements IWebSocketWrapper {
    onMessage: ((data: GenericMessageEvent) => void) | null = null;
    messagesSent: string[] = [];

    setOnMessage(onMessage: (data: GenericMessageEvent) => void): void {
        this.onMessage = onMessage;
    }

    send(message: string): void {
        this.messagesSent.push(message);
    }
}