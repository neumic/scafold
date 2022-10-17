import { MessageBus } from "../../ts/Message/MessageBus.js";
import { AbstractViewComponent } from "../../ts/UI/AbstractViewComponent.js";
import { DocumentWrapper } from "../../ts/UI/DocumentWrapper.js";
import { RootViewComponent } from "../../ts/UI/RootViewComponent.js";
import { assertEquals, fail } from "../Asserts.js";
import { TestCase } from "../TestCase.js";

export class RootViewComponentTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function constructsWithChildren() {
                const document = new DocumentWrapper();
                const messageBus = new MessageBus();
                const testComponent1 = new TestViewComponent(document, messageBus);
                const testComponent2 = new TestViewComponent(document, messageBus);
                let root = new RootViewComponent(document, messageBus, testComponent1, testComponent2);

                const rootElement = root.getElement();
                assertEquals('SECTION', rootElement.tagName);
                assertEquals('root', rootElement.id);
                assertEquals(2, rootElement.childElementCount);
                assertEquals(testComponent1.getElement(), rootElement.childNodes[0] as HTMLDivElement);
                assertEquals(testComponent2.getElement(), rootElement.childNodes[1] as HTMLDivElement);
            }
        ];
    }

}

class TestViewComponent extends AbstractViewComponent {
    public element = this.document.createElement("div");

    getElement(): Element {
        return this.element;
    }
}