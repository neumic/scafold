export interface IWebSocketWrapper {
    setOnMessage(callBack: (data: any) => void): void;
    send(onMessage: string): void;
}