import { IBusEndpoint } from "../../ts/Message/Bus/IBusEndpoint.js";

export class MockMessageSender implements IBusEndpoint {
    getBusId(): number {
        return 0;
    }
}