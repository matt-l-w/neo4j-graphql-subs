"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = void 0;
exports.EVENT_NAME_PREFIX = 'OPERATION_EVENT_';
const operationEventPlugin = (eventEmitter, operationName, eventName) => ({
    requestDidStart(_initialRequestContext) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                willSendResponse(requestContext) {
                    var _a;
                    return __awaiter(this, void 0, void 0, function* () {
                        if ((_a = requestContext.errors) === null || _a === void 0 ? void 0 : _a.length) {
                            console.error(requestContext.errors);
                            return;
                        }
                        if (requestContext.operationName === operationName) {
                            console.debug(`${operationName} finished with no errors. Emitting event.`);
                            console.debug(requestContext.response.data);
                            eventEmitter.emit(eventName, requestContext.response.data);
                        }
                    });
                }
            };
        });
    }
});
exports.default = operationEventPlugin;
