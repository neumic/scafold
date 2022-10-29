import { BoxCheckedMessage } from "../../ts/Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "../../ts/Message/BoxUncheckedMessage.js";
import { GetStateMessage } from "../../ts/Message/GetStateMessage.js";
import { StateSaver } from "../../ts/StateSaver.js";
import { MockMessageBus } from "../mocks/MockMessageBus.js";
import { MockMessageSender } from "../mocks/MockMessageSender.js";
import { assertEquals, assertInstanceOf, assertNotEquals, assertTrue } from "../scaffold/Asserts.js";
import { TestCase } from "../scaffold/TestCase.js";

export class StateSaverTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function setsSelfAsReceiver() {
                const messageBus = new MockMessageBus;

                const stateSaver = new StateSaver(messageBus);

                assertEquals(1, messageBus.receivers.length);
                assertEquals(stateSaver, messageBus.receivers[0]);
            },

            function resendsCurrentState() {
                const messageBus = new MockMessageBus;

                const checkedMessage = new BoxCheckedMessage;
                const uncheckedMessage = new BoxUncheckedMessage;
                const getStateMessage = new GetStateMessage;

                const stateSaver = new StateSaver(messageBus);

                stateSaver.receive(uncheckedMessage);
                stateSaver.receive(checkedMessage);
                stateSaver.receive(getStateMessage);
                stateSaver.receive(getStateMessage);
                stateSaver.receive(uncheckedMessage);
                stateSaver.receive(getStateMessage);

                assertEquals(3, messageBus.messageSent.length);
                assertInstanceOf(BoxCheckedMessage, messageBus.messageSent[0].message);
                assertInstanceOf(BoxCheckedMessage, messageBus.messageSent[1].message);
                assertInstanceOf(BoxUncheckedMessage, messageBus.messageSent[2].message);
            },

            function busId() {
                const stateSaver1 = new StateSaver(new MockMessageBus);
                const stateSaver2 = new StateSaver(new MockMessageBus);

                assertEquals(stateSaver1.getBusId(), stateSaver1.getBusId());
                assertNotEquals(stateSaver1.getBusId(), stateSaver2.getBusId());
            }
        ];
    }
}