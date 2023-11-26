# linux 

主要总结linux上一些基本使用方法

## vim 

![vim](../assets/vim.jpeg)

## 常用命令

[https://github.com/jaywcjlove/linux-command](https://github.com/jaywcjlove/linux-command)

[https://wangchujiang.com/linux-command/](https://wangchujiang.com/linux-command/)

### lsof

选项 

```bash
-a：列出打开文件存在的进程；
-c<进程名>：列出指定进程所打开的文件；
-g：列出GID号进程详情；
-d<文件号>：列出占用该文件号的进程；
+d<目录>：列出目录下被打开的文件；
+D<目录>：递归列出目录下被打开的文件；
-n<目录>：列出使用NFS的文件；
-i<条件>：列出符合条件的进程（协议、:端口、 @ip ）
-p<进程号>：列出指定进程号所打开的文件；
-u：列出UID号进程详情；
-h：显示帮助信息；
-v：显示版本信息

```

1. 列出指定进程号所打开的文件:

```bash
lsof -p $pid
```

2. 获取端口对应的进程ID=>pid:

```bash
lsof -i:9981 -P -t -sTCP:LISTEN
```

3. 列出打开文件的进程:

```bash
lsof $filename
```

4. 查看端口占用:

```bash
lsof -i:$port
```
