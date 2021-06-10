# 拉取

`git fetch` 和`git pull` 都用于代码和分支的更新。

- <h3>🔥 git fetch</h3>

一旦远程主机的版本库有了更新（Git 术语叫做 commit），需要将这些更新取回本地，这时就要用到 git fetch 命令。

```bash
/*
 * git fetch 主机名 远程分支:本地分支（创建一个新分支）
 * 特别注意:不建议本地分支写本地已有分支，否则拉取当有冲突时可能会有问题
*/
##1：拉取更新到本地新建tmp分支
$ git fetch origin master:tmp
##2：合并更新
$ git merge tmp
##3: 当有冲突时，手动解决冲突 然后git add .| git commit -m ""。无冲突时 最后直接push
$ git push origin master
```

- <h3>🔥 git pull</h3>

```bash
/*
 * git pull 主机名 远程分支:本地分支（无则创建一个新分支）
*/
##1：取回origin主机的master分支，与本地的dev分支合并
## || 如果远程分支是与当前分支合并，则冒号后面的部分可以省略。
$ git pull origin master:dev || git pull origin master
##2: 当有冲突时，手动解决冲突 然后git add .| git commit -m ""。无冲突时 最后直接push
$ git push origin master
```

::: tip 结论
git fetch 是从远程获取最新版本到本地，但不会自动 merge。
而 git pull 则是会获取所有远程索引并合并到本地分支中来。效果相同时 git pull 将更为快捷。
:::
