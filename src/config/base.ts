const pwd = process.cwd();
export default {
  // 临时文件存放地址
  tempFilePath: `${pwd}/src/app/public/temp`,
  logConfig: {
    flag: true,
    outDir: `${pwd}/src/app/public/log`,
    level: "info",
  },
};
