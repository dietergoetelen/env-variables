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
    const mapping = Object.keys(process.env)
      .filter((key) => key.startsWith("ENV_"))
      .map((key) => ({
        name: key.substring(4), // remove ENV_
        value: process.env[key],
        slotSetting: false,
      }));
    console.log("storing following env variables:");
    console.log(JSON.stringify(mapping));
  } catch (error) {
    console.log(JSON.stringify(error));
    core.setFailed(error);
  } finally {
  }
}

main();
