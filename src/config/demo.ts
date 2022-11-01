const config = {
  scripts: {
    dev: "cross-env NODE_ENV=development tsnd --respawn src/main.ts", // 开发环境执行的脚本命令，设置环境变量并监听入口文件的变化
    build: "run-s clearBuild compile copyPublic", // 将TypeScript项目打包成JavaScript项目
    clearBuild: "rimraf dist/*", // 在构建的时候清空dist目录
    compile: "tsc", // 根据tsconfig.json的配置编译TypeScript
    copyPublic: "copyfiles -u 1 src/public/* dist", // 有一些资源是需要我们在dist和src之间来回拷贝的，可以借助该命令实现拷贝
    // 其余部分可以按照自己项目最终的部署方式自定义
    serve: "cross-env NODE_ENV=production node dist/main.js",
    start: "pm2 start ecosystem.config.js",
    stop: "pm2 stop ecosystem.config.js",
    restart: "pm2 restart ecosystem.config.js",
    delete: "pm2 delete ecosystem.config.js",
  },
};
