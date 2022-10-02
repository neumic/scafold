import { IWebSocketWrapper } from "../../ts/WebSocket/IWebSocketWrapper.js";

export class MockWebSocket implements IWebSocketWrapper {
    onMessage: ((data: any) => void) | null = null;
    messagesSent: string[] = [];

    setOnMessage(onMessage: (data: any) => void): void {
        this.onMessage = onMessage;
    }

    send(message: string): void {
        this.messagesSent.push(message);
    }
}