import Configstore from "configstore";

const envName = "GOPX_WEBUI_PRO_ENV";
const config = new Configstore("gopx-webui");

export const getEnv = () => config.get(envName) as string | undefined;
export const setEnv = (env: string) => config.set(envName, env);
export const clearAll = () => config.clear();

export const login = async (env: string) => {
  try {
    setEnv(env);
    return "Logged in ✅";
  } catch (error) {
    return;
  }
};
