export interface IWebSocketServerWrapper {
    setOnConnect(method: (socket: any, request: any) => void): void;
}