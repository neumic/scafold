import { UIMessageBus } from "./Message/UIMessageBus.js";
import { DocumentWrapper } from "./UI/DocumentWrapper.js";
import { UIBuilder } from "./UI/UIBuilder.js";

UIBuilder.build(new DocumentWrapper(), new UIMessageBus);