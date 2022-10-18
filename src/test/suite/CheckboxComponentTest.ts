import { BoxCheckedMessage } from "../../ts/Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "../../ts/Message/BoxUncheckedMessage.js";
import { MessageBus } from "../../ts/Message/Bus/MessageBus.js";
import { CheckboxComponent } from "../../ts/UI/CheckboxComponent.js";
import { DocumentWrapper } from "../../ts/UI/DocumentWrapper.js";
import { MockMessageBus } from "../mocks/MockMessageBus.js";
import { MockMessageSender } from "../mocks/MockMessageSender.js";
import { assertEquals, assertFalse, assertInstanceOf, assertNotEquals, assertTrue } from "../scaffold/Asserts.js";
import { TestCase } from "../scaffold/TestCase.js";

export class CheckboxComponentTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testComponentReactsToMessages() {
                const messageBus = new MessageBus();
                const component = new CheckboxComponent(new DocumentWrapper, messageBus);

                assertInstanceOf(HTMLInputElement, component.getElement());
                const element = component.getElement() as HTMLInputElement;

                assertEquals("checkbox", element.type);
                assertFalse(element.checked);

                messageBus.send(new BoxCheckedMessage, new MockMessageSender);
                assertTrue(element.checked);

                messageBus.send(new BoxCheckedMessage, new MockMessageSender);
                assertTrue(element.checked);

                messageBus.send(new BoxUncheckedMessage, new MockMessageSender);
                assertFalse(element.checked);

                messageBus.send(new BoxUncheckedMessage, new MockMessageSender);
                assertFalse(element.checked);
            },


            function testComponentSendsMessage() {
                const messageBus = new MockMessageBus();
                const component = new CheckboxComponent(new DocumentWrapper, messageBus);

                const element = component.getElement() as HTMLInputElement;

                element.checked = false;
                element.click();
                assertInstanceOf(BoxCheckedMessage, messageBus.messageSent.pop()?.message);

                element.click();
                assertInstanceOf(BoxUncheckedMessage, messageBus.messageSent.pop()?.message);

                element.checked = true;
                element.click();
                assertInstanceOf(BoxUncheckedMessage, messageBus.messageSent.pop()?.message);
            },

            function testId() {
                const component1 = new CheckboxComponent(new DocumentWrapper, new MessageBus);
                const component2 = new CheckboxComponent(new DocumentWrapper, new MessageBus);

                assertEquals(component1.getBusId(), component1.getBusId());
                assertNotEquals(component1.getBusId(), component2.getBusId());
            }
        ];
    }
}