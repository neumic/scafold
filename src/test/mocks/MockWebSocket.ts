type MessageType = string | ArrayBufferLike | Blob | ArrayBufferView;

export class MockWebSocket implements WebSocket {
    binaryType: BinaryType = "blob";
    bufferedAmount: number = 1;
    extensions: string = "";
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null = null;
    onerror: ((this: WebSocket, ev: Event) => any) | null = null;
    onmessage: ((this: WebSocket, ev: MessageEvent<any>) => any) | null = null;
    onopen: ((this: WebSocket, ev: Event) => any) | null = null;
    protocol: string = "";
    readyState: number = 0;
    url: string = "";
    close(code?: number | undefined, reason?: string | undefined): void {
        throw new Error("Method not implemented.");
    }
    CLOSED: number = 0;
    CLOSING: number = 0;
    CONNECTING: number = 0;
    OPEN: number = 0;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Error("Method not implemented.");
    }
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Error("Method not implemented.");
    }
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }

    public messagesSent: MessageType[] = [];
    send(data: MessageType): void {
        this.messagesSent.push(data);
    }
}