interface DBBase {
  readonly dbURL: string;
  readonly dbName: "koa";
}
export const DBBase: DBBase = {
  dbURL: "mongodb://localhost:27017/bookdb",
  dbName: "koa",
};
