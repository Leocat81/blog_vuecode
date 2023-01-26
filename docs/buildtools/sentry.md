# sentry

Sentry 是一个流行的错误监控平台，帮助开发者分析，修复问题，优化代码的性能。可以进行错误捕获，问题追踪，并提供问题详情，适用于多个平台，多种语言。

本章主要介绍如何私有化部署sentry, 以及搭建sentry环境，实现前端监控平台的搭建。

## 私有化部署sentry

> [项目地址](https://github.com/getsentry/self-hosted)

主要采用docker实现部署。

### 准备工作

#### 环境需要:

* Docker 19.03.6+
* Compose 1.28.0+
* 4 CPU Cores
* 8 GB RAM
* 20 GB Free Disk Space
* git 1.8.0.0+
* python 3

---

1. `docker`  `docker compose` 安装

  + [docker 安装](/buildtools/jenkins.html#安装-docker)

  + [docker compose 安装](https://www.runoob.com/docker/docker-compose.html)

> `docker`  `docker compose` 安装完成后启动docker!。

```bash
sudo systemctl start docker
```

2. `git`,`python3`安装

```bash
yum install git python3
```

#### 项目准备

```bash
/* 克隆项目 */
git clone https://github.com/getsentry/self-hosted
/* 切换分支(此处貌似不切换分支会出现问题) */
cd self-hosted
git checkout 22.11.0
```

#### 安装项目

```bash
./install.sh
/* 提示权限不足可以执行下面这条命令对文件夹赋权 */
chmod 777 ./*
```

## 参考文献

* [从零搭建Sentry](https://blog.csdn.net/maomaolaoshi/article/details/128203552)

* [sentry 官网VUE集成教程](https://docs.sentry.io/platforms/javascript/guides/vue/)

* [vuejs 官网推荐](https://cn.vuejs.org/guide/best-practices/production-deployment.html#tracking-runtime-errors)
