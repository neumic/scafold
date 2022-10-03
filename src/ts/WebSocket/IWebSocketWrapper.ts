export type GenericMessageEvent = {
    data: any,
};

export interface IWebSocketWrapper {
    setOnMessage(callBack: (messageEvent: GenericMessageEvent) => void): void;
    send(serializedMessage: string): void;
}