import { IBusEndpoint } from "../../ts/Message/IBusEndpoint.js";

export class MockMessageSender implements IBusEndpoint {
    getBusId(): number {
        return 0;
    }
}