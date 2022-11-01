import base from "./base";
import dev from "./dev";
import pre from "./pre";
import pro from "./pro";

const env = process.env.NODE_ENV || "dev";

const configMap: Record<string, any> = {
  dev,
  pre,
  pro,
};
const maps = Object.assign(base, configMap[env]);
export default maps;
