import { IBusEndpoint, BusId } from "./IBusEndpoint.js";

export type UIMessageName = string;
export abstract class AbstractUIMessage {
    private _name: UIMessageName;
    private _senderId: BusId;

    public messageName(): UIMessageName {
        return this._name;
    }

    public getSenderId(): BusId {
        return this._senderId;
    }
    constructor(name: UIMessageName, sender: IBusEndpoint) {
        this._name = name;
        this._senderId = sender.getBusId();
    }
}