import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
    environmentName: "local",
    appVersion: commonEnv.appVersion + "Local",
    API_ENDPOINT: "http://localhost/4200/api",
}

export const environment = Object.assign(commonEnv, env);