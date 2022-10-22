import { GenericEvent, GenericMessageEvent, IWebSocketWrapper } from "../../ts/WebSocket/IWebSocketWrapper.js";

export class MockWebSocket implements IWebSocketWrapper {
    onMessage: ((data: GenericMessageEvent) => void) | null = null;
    messagesSent: string[] = [];
    onOpen: ((data: GenericEvent) => void) | null = null;


    setOnMessage(onMessage: (data: GenericMessageEvent) => void): void {
        this.onMessage = onMessage;
    }

    setOnOpen(onOpen: (data: GenericEvent) => void): void {
        this.onOpen = onOpen;
    }

    send(message: string): void {
        this.messagesSent.push(message);
    }
}