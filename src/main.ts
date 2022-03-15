import * as core from "@actions/core";
// import { AzureAppService } from "azure-actions-appservice-rest/lib/Arm/azure-app-service";
// import { AzureAppServiceUtility } from "azure-actions-appservice-rest/lib/Utilities/AzureAppServiceUtility";
// import { AzureResourceFilterUtility } from "azure-actions-appservice-rest/lib/Utilities/AzureResourceFilterUtility";
// import { IAuthorizationHandler } from "azure-actions-webclient/lib/AuthHandler/IAuthorizationHandler";
// import { getHandler } from "azure-actions-webclient/lib/AuthorizationHandlerFactory";

export async function main() {
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
  } catch (error) {
    console.log(JSON.stringify(error));
    core.setFailed(error);
  } finally {
  }
}

main();
