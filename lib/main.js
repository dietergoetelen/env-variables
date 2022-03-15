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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const azure_app_service_1 = require("azure-actions-appservice-rest/lib/Arm/azure-app-service");
const AzureAppServiceUtility_1 = require("azure-actions-appservice-rest/lib/Utilities/AzureAppServiceUtility");
const AzureResourceFilterUtility_1 = require("azure-actions-appservice-rest/lib/Utilities/AzureResourceFilterUtility");
const AuthorizationHandlerFactory_1 = require("azure-actions-webclient/lib/AuthorizationHandlerFactory");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const webAppName = core.getInput("app-name", { required: true });
            const endpoint = yield AuthorizationHandlerFactory_1.getHandler();
            const appDetails = yield AzureResourceFilterUtility_1.AzureResourceFilterUtility.getAppDetails(endpoint, webAppName);
            const resourceGroupName = appDetails["resourceGroupName"];
            const appService = new azure_app_service_1.AzureAppService(endpoint, resourceGroupName, webAppName);
            const appServiceUtility = new AzureAppServiceUtility_1.AzureAppServiceUtility(appService);
            const mapping = Object.keys(process.env)
                .filter((key) => key.startsWith("ENV_"))
                .map((key) => ({
                name: key.substring(4),
                value: process.env[key],
                slotSetting: false,
            }));
            appServiceUtility.updateAndMonitorAppSettings(mapping, null);
            console.log("storing following env variables:");
            console.log(JSON.stringify(mapping));
        }
        catch (error) {
            console.log(JSON.stringify(error));
            core.setFailed(error);
        }
        finally {
        }
    });
}
exports.main = main;
main();
