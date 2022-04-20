# 分支
* <h3>基础操作</h3>

* `git branch`用于查看本地分支
* `git branch -a`查看所有分支（包括远程分支）
* `git branch XXX`新建一个分支
* `git checkout master` 切换分支
* `git checkout -t orgin/master` 本地创建一个 master 并建立一个追踪关系，自动追踪远程分支（origin/master)

* <h3>同步本地与线上分支</h3>

🔔 将线上新增分支更新到本地

第一种方式：拉取分支不创建本地分支, 其后一步完成创建分支与建立追踪关系

```bash
##1：拉取远程分支(不创建本地分支)
$ git pull || git fetch
##2：建立本地分支与远程分支的追踪关系
$ git checkout -t orgin/XXX
```

第二种方式 拉取分支就创建本地分支，但此时追踪关系未创建，其后手动建立追踪关系

```bash
##1：拉取远程分支（本地没有的话，创建与远程分支同名的本地分支）
git pull origin XXX || git fetch origin XXX:XXX
##2：手动指定本地分支与远程分支的追踪关系
$ git branch --set-upstream-to=origin/master master
```

🔔 删除线上分支

```bash
git push origin --delete XXXXX(分支名)
```

🔔 将线上删除分支更新到本地

如果远程主机删除了某个分支，默认情况下，git pull 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致 git pull 不知不觉删除了本地分支。

但是，你可以改变这个行为，加上参数 -p 就会在本地删除远程已经删除的分支。

```bash
$ git pull -p
# 等同于下面的命令
$ git fetch --prune origin
$ git fetch -p
```

* <h3>追踪关系（tracking）</h3>

查看分支跟踪的远程分支

```bash
$ git branch --vv

  dev    04c3d8f [origin/dev] update README.md.
  dev1   6203f67 [origin/dev1] update README.md.
* master d672abc [origin/master] update README.md.
  tmp    219538d update README.md.

```

在某些场合，Git 会自动在本地分支与远程分支之间，建立一种追踪关系（tracking）。比如，在 git clone 的时候，所有本地分支默认与远程主机的同名分支，建立追踪关系，也就是说，本地的 master 分支自动"追踪"origin/master 分支。

Git 也允许手动建立追踪关系。

```bash
##该命令指定master分支追踪origin/next分支。
$ git branch --set-upstream-to= master origin/next
##该命令创建一个本地 master 并建立一个追踪关系，自动追踪远程分支（origin/master)
$ git checkout -t orgin/master

## 推送本地分支并与线上分支建立追踪关系

$ git push -u origin/master
```

如果<b>当前分支</b>与远程分支存在追踪关系，git pull 就可以省略远程分支名。

```bash
##该命令表示，本地的当前分支自动与对应的origin主机"追踪分支"（remote-tracking branch）进行合并。
$ git pull origin
```

<b>如果当前分支只有一个追踪分支</b>，连远程主机名都可以省略。

```bash
$ git pull
```

* <h3>创建分支</h3>

从某个 point 创建一个新的 XXX 分支

```bash
$ git branch <branch> <start point>

```

强制创建一个分支

```bash
$ git checkout -B <branch>
```

创建一个没有提交记录的分支(常用于删除本地分支记录)

```bash
$ git checkout --orphan <branch>

## 删除本地分支记录（假设当前仅有一个分支master）

$ git checkout --orphan develop # 基于master分支 创建一个没有commit log 的develop分支
$ git branch -D master # 删除原有master分支
$ git branch -m master # 将当前分支develop 重命名为 master
#或者直接 git commit -a -m "XXX"
$ git add .
$ git commit -m "XXX"
$ git push -f
```

* <h3>历史文件操作(高阶指南)</h3>

基础介绍： `git branch -filter` ，可用于删除没有使用的大文件。

场景介绍：比如不小心提交了一个大文件，已经推送到了线上。导致线上仓库体积很大，虽然可以将文件删除后再次提交一次，但是 `git history` 已经存在此文件的记录，故就算是删除了文件，但是仓库的实际体积大小依然不能减小。那么此时 `git branch -filter` 就会起到了大作用。

```bash
$ git filter-branch --force --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch XXX.framework(文件名)' --tag-name-filter cat -- --all
$ git push -f
```

* `filter-branch` 是让 git 重写每一个分支

* `--force` 假如遇到冲突也让 git 强制执行

* `--index-filter` 选项指定重写的时候应该执行什么命令，要执行的命令紧跟在它的后面，在这里就是 `git rm --cached --ignore-unmatch password.txt` ，让 git 删除掉缓存的文件，如果有匹配的话

* `--prune-empty` 选项告诉 git，如果因为重写导致某些 commit 变成了空（比如修改的文件全部被删除），那么忽略掉这个 commit

* `-tag-name-filter` 表示对每一个 tag 如何重命名，重命名的命令紧跟在后面，当前的 tag 名会从标注输入送给后面的命令，用 cat 就表示保持 tag 名不变

::: warning
1: 此操作会修改有关的commit hashID，谨慎操作！

2：执行完命令，一定要使用强制推送 `git push -f` ，切记不要 `git pull` , 否则会出现两份同样的commit。
:::

> 其他文献：<a href="https://www.jianshu.com/p/780161d32c8e" target="_blank">彻底删除 git 中没用的大文件</a>
