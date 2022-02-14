# 基础

## 三种状态

现在请注意，如果你希望后面的学习更顺利，请记住下面这些关于 Git 的概念。 Git 有三种状态，你的文件可能处于其中之一： **已提交（committed)**、**已修改（modified）** 和 **已暂存（staged）**。

- 已修改表示修改了文件，但还没保存到数据库中
- 已暂存表示对一个已修改的文件的当前版本做了标记，使之包含在下次提交的快照中
- 已提交表示数据已安全地保存在本地数据库中。

这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。

![RUNOOB 图标](../assets/git_file_status.png)

## 基本设置

- `git config --global user.email "你的邮箱"`

- `git config --global user.name "你的github用户名"`

> 参考文献：<a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-Git-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F" target="_blank"> Git 是什么？</a>