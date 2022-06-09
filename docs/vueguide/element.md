# element 使用总结

## 自定义组件结合 Form 表单验证

比如自己封装了一个上传图片的组件，如果要将`fileList`交给`form`表单校验，需要以下几步

```html
<el-form
  label-position="right"
  ref="ruleForm"
  :rules="rules"
  :model="formLabelAlign"
  label-width="100px"
>
  <el-form-item label="banner图:" prop="fileList">
    <UploadImage :limit="1" v-model="formLabelAlign.fileList"></UploadImage>
  </el-form-item>
</el-form>

/* 本案例采用vue2,typescript编写 */
<script lang="ts">
  @Component
  export default class add extends Vue {
      rules = {
      fileList: [
        {
          required: true,
          message: '请上传banner图',
          trigger: 'change'
        }
      ],
  }
</script>
```

- 第一步：混入 element-ui 的方法

```js
import emitter from 'element-ui/lib/mixins/emitter'
@Component({
  minxs:[emitter]
})
```

- 第一步：调用混入的方法

当你的组件`fileList`发生改变时，调用`dispatch`方法。
例如：

```html
<template>
  <el-upload
    :limit="limit"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :action="$Api.wholefileUpload"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-change="handleChange"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
  >
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script lang="ts">
  import emitter from "element-ui/lib/mixins/emitter";
  @Component({
    minxs: [emitter],
  })
  export default class upload extends Vue {
    handleChange(file: FileListItem, fileList: FileListItem[]) {
      /* 全局混入的方法：主要处理自定义组件的表单验证 */
      (this as any).dispatch("ElFormItem", "el.form.change", fileList);
    }
  }
</script>
```

::: warning
调用 dispatch 方法时，一定要注意 this 的指向问题，需满足当前 this 指向(所在 vue 组件实例)必须是`ElFormItem组件`的子组件或孙子组件，因为`dispatch`会一直从当前组件向上查找到`ElFormItem`组件，并触发其`ElFormItem`组件上的`el.form.change`事件，通知表单重新校验。
:::
