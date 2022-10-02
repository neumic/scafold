import { IWebSocketServerWrapper } from "../../ts/WebSocket/IWebSocketServerWrapper.js";
import { IWebSocketWrapper } from "../../ts/WebSocket/IWebSocketWrapper.js";

export class MockWebSocketServer implements IWebSocketServerWrapper {
    public setOnConnect(callback: (socket: IWebSocketWrapper, message: string) => void): void {
        this.onConnectParameter = callback;
    }
    onConnectParameter: ((socket: IWebSocketWrapper, message: string) => void) | null = null;

}