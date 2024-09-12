## 文件下载

> 设置相应头[Content-Disposition](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition)，以实现浏览器的附件下载功能，让浏览器自己异步下载文件，不阻塞系统其他操作

使用 nodejs 实现文件下载功能

```js
import Koa from "koa";
import path from "path";
import fs from "fs";
const app = new Koa();

app.use(async (ctx) => {
  const filePath = path.join(process.cwd(), "src/伦理道德.mp4");
  const fileName = path.basename(filePath);
  // 设置相应头
  ctx.set("Content-Disposition", `attachment; filename=${encodeURIComponent("伦理道德.mp4")}`);
  ctx.body = fs.createReadStream(filePath);
});

app.listen(3000, () => {
  console.log("服务启动成功");
});
```
