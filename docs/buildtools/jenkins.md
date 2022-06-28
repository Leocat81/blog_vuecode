# CI/CD

`centos 7`,`docker`,`jenkins`

## 安装 `docker`

- 下载
  
  `curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun`

- 验证
  
  `docker -v`

- 启动
  
  `systemctl start docker`

## 安装`jenkins`

> https://www.jenkins.io/zh/doc/book/installing/

- 下载镜像
  
  `docker pull jenkinsci/blueocean`

- 验证镜像 

  `docker images`

- 创建容器并运行
  
  `docker run -u root --rm -d -p 8080:8080 -p 50000:50000 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean`

- 验证容器
  
  `docker ps`

- 打开页面
  
  `http://localhost:8080`

## 初始化`jenkins`

- 登录

  进入容器查看密码，并输入密码

```bash
$ docker exec -it containerID /bin/bash
$ cd /var/jenkins_home/secrets
$ vi initialAdminPassword
```
- 设置密码
- 安装推荐插件
- 安装`Nodejs`
  
  >[nodejs安装后执行打包异常](./jenkins.md#一些问题)


- `Gitee`
- `Publish over SSH` plugins
  
- 重启`jenkins`

## 新建任务

- 配置源码管理
  
- 构建触发库 
  
  1. 勾选`Gitee webhook`触发构建
  2. 生成`Gitee webhook密码`并填写到自己的gitee项目设置中

- 构建环境
  
  1. `Provide Node & npm bin/ folder to PATH` 勾选系统配置中的`nodejs` (已在jenkins系统管理中配置成功)

- 构建
  
  1. 执行自己的构建命令
  
  ```sh
     npm config set registry https://registry.npmmirror.com
     npm install --verbose
     npm run build 
  ```
  2. Send files or execute commands over SSH 上传构建好的包到服务器
   > 此处需要在`jenkins系统管理`中将`Publish over SSH`配置好，此处选择需要上传的文件即可，注意文件匹配规则！

   ```sh
   Source files: **/docs/.vuepress/dist/**
   Remove prefix: /docs/.vuepress/dist
   ```
- 保存配置


## 安装nginx 

- 拉去镜像

`docker run --name my-nginx -p 80:80 -v /home/blogs:/home/blogs -d nginx`

`docker cp /home/nginx/conf.d containerID:/etc/nginx/conf.d`

 ## 一些问题

- `nodejs`下载后无法使用

  [https://stackoverflow.com/questions/51416409/jenkins-env-node-no-such-file-or-directory](https://stackoverflow.com/questions/51416409/jenkins-env-node-no-such-file-or-directory)

  1. 进入容器
  2. apk配置镜像源
     `sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories`
  3. 下载nodejs
     `apk add nodejs`
  4. 确认下载成功
     `node -v`
  5. 去掉配置步骤中的软链
  