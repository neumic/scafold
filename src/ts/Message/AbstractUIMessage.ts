export type UIMessageName = string;
export abstract class AbstractUIMessage {
    private _name: UIMessageName;
    public get messageName(): UIMessageName {
        return this._name;
    }
    constructor(name: UIMessageName) {
        this._name = name;
    }
}