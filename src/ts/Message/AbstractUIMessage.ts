
export type UIMessageName = string;
export abstract class AbstractUIMessage {
    private _name: UIMessageName;

    public messageName(): UIMessageName {
        return this._name;
    }

    constructor(name: UIMessageName) {
        this._name = name;
    }
}