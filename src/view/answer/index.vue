<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="form.problemTitle"
        type="textarea"
        rows="1"
        autosize
        disabled
      />
      <quill-editor
        v-model="form.content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
      <van-cell>
        <van-button plain type="info" size="small" style="float: right" @click="doRelease">发布</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import {Field, CellGroup, Button, Cell, Notify} from 'vant'
  import {create} from '@/api/answer'

  export default {
    name: "answer",
    components: {
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Cell.name]: Cell,
      [Notify.name]: Notify
    },
    data() {
      return {
        form: {
          problemId: '',
          problemTitle: '',
          content: '',
        },
        editorOption: {
          modules:{
            //自定义文本编辑器工具栏
            toolbar:[
              ['bold', 'italic', 'underline'],    //加粗，斜体，下划线
              ['blockquote', 'code-block'],     //引用，代码块
              [{ 'header': 2 }],        // 标题
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
              ['image'],  //上传图片

              // ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
              // ['blockquote', 'code-block'],     //引用，代码块
              //
              // [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
              // [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
              // [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
              // [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
              // [{ 'direction': 'rtl' }],             // 文本方向
              //
              //
              // [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
              // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
              //
              // [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
              // [{ 'font': [] }],     //字体
              // [{ 'align': [] }],    //对齐方式
              //
              // ['clean'],    //清除字体样式
              // ['image','video']    //上传图片、上传视频
            ]
          },
          theme:'snow'
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this.form.problemId = this.$route.query.problemId
        this.form.problemTitle = this.$route.query.problemTitle
      })
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      }
    },
    methods: {
      //发布按钮
      doRelease() {
        if (this.form.content == '') {
          Notify({
            message: '请回答',
            duration: 2500
          });
        } else {
          create(this.form).then(res => {
            alert("发布成功")
            this.$router.push("/home")
          })
        }
      },
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur(){//失去焦点事件
      },
      onEditorFocus(){//获得焦点事件
      },
      onEditorChange(){//内容改变事件
      }
    }
  }
</script>

<style scoped>

</style>
