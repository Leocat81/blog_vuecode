# 重写历史

> 本文摘录自 `GIT BOOK`

许多时候，在使用 Git 时，你可能想要修订提交历史。 Git 很棒的一点是它允许你在最后时刻做决定。 你可以在将暂存区内容提交前决定哪些文件进入提交，可以通过 git stash 来决定不与某些内容工作， 也可以重写已经发生的提交就像它们以另一种方式发生的一样。 这可能涉及改变提交的顺序，改变提交中的信息或修改文件，将提交压缩或是拆分， 或完全地移除提交——在将你的工作成果与他人共享之前。

## 修改最后一次提交

```bash
$ git commit --amend
```

这条命令相当于：

```bash
# HEAD^ 表示当前分支的上一个提交
$ git reset --soft HEAD^ 
$ ... do something else to come up with the right tree ...
# ORIG_HEAD 是一个临时性的引用，用于在某些操作中保存先前 HEAD 的位置，以便稍后可能需要时能够恢复到该位置,
$ git commit -c ORIG_HEAD
# 在执行 git reset --soft HEAD^ 操作之后，之前的 HEAD 的位置将存储在 ORIG_HEAD 中。这样，如果你意识到你不想进行这个重置，你可以使用 git reset --hard ORIG_HEAD 将 HEAD 恢复到之前的位置
```

上面这条命令会将最后一次的提交信息载入到编辑器中供你修改。 当保存并关闭编辑器后，编辑器会将更新后的提交信息写入新提交中，它会成为新的最后一次提交。

::: danger 注意
使用这个技巧的时候需要小心，因为修正会改变提交的 SHA-1 校验和。 它类似于一个小的变基——如果已经推送了最后一次提交就不要修正它。
:::

> 参考文献：<a href="https://www.git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2" target="_blank">Git 工具 - 重写历史</a>

## 拆分已经提交了的commit 

::: tip
对最近的一次提交修改比较友好，如果是对历史很久的commit进行拆分，需要自己辨别改文件的变化。
:::

```bash
$ git reset --soft HEAD^
```

此命令会将 `最近的一次提交退回到暂存区中` ，此时可自行此操作文件，其后再次提交。

比如：

```bash
git reset HEAD --filename 
```

此命令会将名为 `filename` 的文件退回在 `changed` 状态，此时可自行此操作文件，其后再次提交到暂存区。
