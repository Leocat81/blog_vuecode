# ❤️ blog_vuecode ❤️

#### 介绍

<br>
✨使用 vuepress 构建的个人博客。✨

#### 运行

<br>
⚡1.npm install⚡ <br><br>
⚡2.npm run docs:dev⚡

#### 打包

<br>
⛄

`npm run docs:build`

⛄
!!! 因为@vssue/api-gitee-v5 包存在问题，所有 npm 下载@vssue/api-gitee-v5 包后，需要去 node_modules 里@vssue/api-gitee-v5/lib/index.js

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

<h3>欢迎大家在评论区留下自己的意见，博主会第一时间回答。</h3>
