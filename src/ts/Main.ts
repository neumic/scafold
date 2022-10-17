import { MessageBus } from "./Message/MessageBus.js";
import { DocumentWrapper } from "./UI/DocumentWrapper.js";
import { UIBuilder } from "./UI/UIBuilder.js";

UIBuilder.build(new DocumentWrapper(), new MessageBus);