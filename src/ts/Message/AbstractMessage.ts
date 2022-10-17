
export type MessageName = string;
export abstract class AbstractMessage {
    private _name: MessageName;

    public messageName(): MessageName {
        return this._name;
    }

    constructor(name: MessageName) {
        this._name = name;
    }
}