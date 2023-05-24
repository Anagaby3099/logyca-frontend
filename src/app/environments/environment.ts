import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
    environmentName: "development",
    appVersion: commonEnv.appVersion + "Dev"
};

export const environment = Object.assign(commonEnv, env)