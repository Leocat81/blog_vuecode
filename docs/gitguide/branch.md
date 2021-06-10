# 分支

- <h3>基础操作</h3>

- `git branch`用于查看本地分支
- `git branch -a`查看所有分支（包括远程分支）
- `git branch XXX`新建一个分支
- `git checkout master` 切换分支
- `git checkout -t orgin/master` 本地创建一个 master 并建立一个追踪关系，自动追踪远程分支（origin/master)

- <h3>同步本地与线上分支</h3>

🔔 将线上新增分支更新到本地

第一种方式：拉取分支不创建本地分支,其后一步完成创建分支与建立追踪关系

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

🔔 将线上删除分支更新到本地

如果远程主机删除了某个分支，默认情况下，git pull 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致 git pull 不知不觉删除了本地分支。

但是，你可以改变这个行为，加上参数 -p 就会在本地删除远程已经删除的分支。

```bash
$ git pull -p
# 等同于下面的命令
$ git fetch --prune origin
$ git fetch -p
```

- <h3>追踪关系（tracking）</h3>

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
$ git branch --set-upstream master origin/next
##该命令创建一个本地 master 并建立一个追踪关系，自动追踪远程分支（origin/master)
$ git checkout -t orgin/master
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
