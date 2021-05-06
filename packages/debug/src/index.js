import Event, { EVENT_TYPE } from "./core/event";
import * as utils from "./core/utils";
import * as apiHost from "./core/apiHost";

export { getWXDebugStatus, setEnableWXDebug } from "./core/wxDebug";
export { start, isStarted, networkProxy } from "./core/init";
export const eventBus = new Event();
export { EVENT_TYPE, utils };
