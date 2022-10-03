import { IWebSocketWrapper } from "./IWebSocketWrapper.js";

export interface IWebSocketServerWrapper {
    setOnConnect(method: (socket: IWebSocketWrapper) => void): void;
}