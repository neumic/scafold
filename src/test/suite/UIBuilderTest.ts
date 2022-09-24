import { RootViewComponent } from "../../ts/UI/RootViewComponent.js";
import { UIBuilder } from "../../ts/UI/UIBuilder.js";
import { assertEquals, assertInstanceOf, fail } from "../Asserts.js";
import { MockDocumentWrapper } from "../mocks/MockDocumentWrapper.js";
import { TestCase } from "../TestCase.js";

export class UIBuilderTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function viewComponentStructure() {
                const mockument = new MockDocumentWrapper();

                const rootcomponent = UIBuilder.build(mockument);
                assertInstanceOf(RootViewComponent, rootcomponent);
                assertEquals(rootcomponent.getElement(), mockument.getBodyElement().children[0]);

                assertEquals(0, rootcomponent.children.length);
            }
        ];
    }
}