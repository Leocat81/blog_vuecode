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
- 安装`Nodejs`,`Gitee` plugins
- 重启`jenkins`

## 安装nginx 

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
  