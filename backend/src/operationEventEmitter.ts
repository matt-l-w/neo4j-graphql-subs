import EventEmitter from 'events';
import { PluginDefinition } from "apollo-server-core";

export const EVENT_NAME_PREFIX = 'OPERATION_EVENT_';

type OperationEventPlugin = (eventEmitter: EventEmitter, operationName: string, eventName: string) => PluginDefinition;

const operationEventPlugin: OperationEventPlugin = (eventEmitter, operationName, eventName) => ({
  async requestDidStart(_initialRequestContext) {
    return {
      async willSendResponse(requestContext) {
        if (requestContext.errors?.length) {
          console.error(requestContext.errors);
          return
        }

        if (requestContext.operationName === operationName) {
          console.debug(`${operationName} finished with no errors. Emitting event.`)
          console.debug(requestContext.response.data)
          eventEmitter.emit(eventName, requestContext.response.data)
        }
      }
    }
  }
});


export default operationEventPlugin;