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
// import { AzureAppService } from "azure-actions-appservice-rest/lib/Arm/azure-app-service";
// import { AzureAppServiceUtility } from "azure-actions-appservice-rest/lib/Utilities/AzureAppServiceUtility";
// import { AzureResourceFilterUtility } from "azure-actions-appservice-rest/lib/Utilities/AzureResourceFilterUtility";
// import { IAuthorizationHandler } from "azure-actions-webclient/lib/AuthHandler/IAuthorizationHandler";
// import { getHandler } from "azure-actions-webclient/lib/AuthorizationHandlerFactory";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /*
            let webAppName: string = core.getInput("app-name", { required: true });
            let slotName: string = core.getInput("slot-name", { required: false });
            let endpoint: IAuthorizationHandler = await getHandler();
        
            let appDetails = await AzureResourceFilterUtility.getAppDetails(
              endpoint,
              webAppName
            );
            let resourceGroupName = appDetails["resourceGroupName"];
        
            let appService: AzureAppService = new AzureAppService(
              endpoint,
              resourceGroupName,
              webAppName,
              slotName
            );
            let appServiceUtility: AzureAppServiceUtility = new AzureAppServiceUtility(
              appService
            );
            */
            console.log("getting the configuration");
            console.log(process.env.FOO_BAZ);
            console.log("post configuration");
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
