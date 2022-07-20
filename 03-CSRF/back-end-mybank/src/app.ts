import express from "express";
import path from "path";
import { createRestApiServer } from "core/servers";
import { envConstants } from "core/constants";
import { accountsApi } from "pods/account";
import { movementsApi } from "pods/movement";

const restApiServer = createRestApiServer();

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));

restApiServer.use("/api/accounts", accountsApi);
restApiServer.use("/api/movements", movementsApi);

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
