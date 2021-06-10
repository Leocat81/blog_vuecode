<p align="center">
<img src="./docs/.vuepress/public/img/panda4.png" width="300"><br>
✨使用 vuepress 构建的个人博客。✨
</p>

🌈 Site

线上预览地址：
<a href="http://pipepandafeng.gitee.io/pipepandafeng" target="_blank">http://pipepandafeng.gitee.io/pipepandafeng</a>

🦄 Usage

> 本地运行

- ⚡1.npm install⚡
- ⚡2.npm start 或者 npm run docs:dev⚡

> 打包

- ⚡npm run docs:build⚡

⚠️ Warning

!!! 因为@vssue/api-gitee-v5 包存在问题，所以 npm 下载@vssue/api-gitee-v5 包后，需要去 node_modules 里@vssue/api-gitee-v5/lib/index.js

```js
        const { data } = await this.$http.post(originalURL, {  //proxyURL换为originalURL
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code,
            grant_type: 'authorization_code',
            redirect_uri: window.location.href,
        });
        return data.access_token;
    }
```

🧱 Contribute

<h3>欢迎大家在评论区留下自己的意见，博主会第一时间回答。</h3>
