# 贮藏

有时，当你在项目的一部分上已经工作一段时间后，所有东西都进入了混乱的状态， 而这时你想要切换到另一个分支做一点别的事情。 问题是，你不想仅仅因为过会儿回到这一点而为做了一半的工作创建一次提交。 针对这个问题的答案是 `git stash` 命令

* git stash

现在想要切换分支，但是还不想要提交之前的工作，想要贮藏修改。 将新的贮藏推送到栈上，运行 `git stash` 或 `git stash push`

```bash
$ git stash 或 git stash push
```

* git stash list

要查看所有贮藏，运行 `git stash list`

```bash
$ git stash list
```

* git stash apply

要应用（恢复但并不从栈上移除）一个贮藏，运行 `git stash apply` 加上要应用的贮藏的名字

* git stash drop 

要从栈上移除一个贮藏，运行 `git stash drop` 加上要移除的贮藏的名字

* git stash pop

要应用（恢复）并从栈上移除一个贮藏，运行 `git stash pop` , 是 `git stash apply` 和 `git stash drop` 的简写。

## 参考文献

* [https://git-scm.com/book/zh/v2/Git-工具-贮藏与清理](https://git-scm.com/book/zh/v2/Git-工具-贮藏与清理)
