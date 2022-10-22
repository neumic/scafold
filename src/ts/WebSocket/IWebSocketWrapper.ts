export type GenericMessageEvent = {
    data: any,
};

export type GenericEvent = {
};

export interface IWebSocketWrapper {
    setOnOpen(callBack: (event: GenericEvent) => void): void;
    setOnMessage(callBack: (messageEvent: GenericMessageEvent) => void): void;
    send(serializedMessage: string): void;
}