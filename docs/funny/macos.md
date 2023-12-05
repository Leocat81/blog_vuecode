# macos

## macos vscode 快捷键

```bash
# 单行注释
cmd + /
#  多行注释
opt + shift + A
# 重新打开已关闭文件
cmd + shift+ T
# 返回该方法上一个层级
cmd + [
# 进入该方法
cmd + ]
```

## fig 自动补全工具

> [https://fig.io](https://fig.io)

## 设置系统代理

1. 临时代理

```bash
export http_proxy="http://127.0.0.1:1087" 
export https_proxy="http://127.0.0.1:1087"
# 或者直接
export all_proxy="http://127.0.0.1:52891"  这是直接设置了http/https省得麻烦，当然你要是有分开设置的需求就分开设置

# socks5 
export http_proxy="socks5://127.0.0.1:1086"
export https_proxy="socks5://127.0.0.1:1086"
# 或者直接
export all_proxy="socks5://127.0.0.1:1086" // 这是直接设置了http/https省得麻烦，当然你要是有分开设置的需求就分开设置
```

2. 永久写入

如果使用的是zsh就在.zshrc中写入

```bash
export http_proxy="http://127.0.0.1:1087"
export https_proxy="http://127.0.0.1:1087"
# 或者直接
export all_proxy="http://127.0.0.1:1087"

# socks5 
export http_proxy="socks5://127.0.0.1:1086"
export https_proxy="socks5://127.0.0.1:1086"
# 或者直接
export all_proxy="socks5://127.0.0.1:1086"
```

3. 取消代理

```bash
unset http_proxy // 取消http代理
unset https_proxy // 取消https代理
# 或者直接全部取消
unset ALL_PROXY
```

## 终端快捷键

```bash
# 光标移动开头位置
Control + A
# 光标移动末尾位置
Control + E
# 光标向左移动一个字符
Control + B
# 光标向右移动一个字符
Control + F
# 删除光标所在的字符
Control + D
# 删除光标后面的字符
Control + K
# 删除整行
Control + U
# 搜索命令的历史记录
Control + R
# 清屏
Control + L
# 退出
Control + C
```

## mdfind

> mdfind: macOS Spotlight的命令行界面

[https://metaredux.com/posts/2019/12/22/mdfind.html](https://metaredux.com/posts/2019/12/22/mdfind.html)

## Apple macOS命令行(macOS bash)的A-Z索引。

[https://ss64.com/osx/](https://ss64.com/osx/)
