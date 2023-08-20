# ip 池的搭建

当使用爬虫时，需要服务 ip 池来转发请求，避免单一 ip 地址被封。本节主要介绍如何**tinyprox**使用服务器搭建一个简单的 ip 代理服务器。

## 环境

* centos 7

## 安装

1. yum -y install tinyproxy

> 如在运行中提示 `没有可用的软件包` ，需要安装 `epel-release` .

`epel-release` : EPEL 是由 Fedora 社区打造，为 RHEL 及衍生发行版如 CentOS、Scientific Linux 等提供高质量软件包的项目。装上了 EPEL 之后，就相当于添加了一个第三方源。官方的 rpm repository 提供的 rpm 包也不够丰富，很多时候需要自己编译那太辛苦了，而 EPEL 恰恰可以解决这两方面的问题。

EPEL 安装方法：yum -y install epel-release

2. 修改配置

```sh
/etc/tinyproxy/tinyproxy.conf
```

* 修改端口号，配置文件第 23 行，内容如下：

```sh
Port 8888
```

* 修改允许访问的 IP，配置文件第 211 行，内容如下：

```sh
Allow 127.0.0.1
```

将 127.0.0.1 修改为使用这个代理的客户机的 IP，如果你想任何人都可以访问，把这行前面加个#注释掉就可以了

3. 检查端口是否开放

4. 启动 tinyproxy 服务

```sh
启动 ：systemctl start tinyproxy.service

停止 ：systemctl stop tinyproxy.service

重新启动 ：systemctl restart tinyproxy.service

开机启动 ：systemctl enable tinyproxy.service

查看状态 ：systemctl status tinyproxy.service

取消开机启动 ：systemctl disable tinyproxy.service
```

## 使用(以nodejs 为例)

```javascript
import axios from "axios";
import {
    HttpsProxyAgent
} from "https-proxy-agent";

/*  该接口目前有IP限制，需要采取一些防范措施 */
async function query(carNo) {
    const config = {
        method: "get",
        url: `https://csh.lzznbc.com/parking_orders/wx_get_car_orders?car_no=${carNo}`,
        proxy: false,
        httpsAgent: new HttpsProxyAgent(`http://113.125.114.186:8888`),
    };
    let res = await axios(config);
    console.log(res.data);
}

query("冀A39BK1");

export default query;
```
