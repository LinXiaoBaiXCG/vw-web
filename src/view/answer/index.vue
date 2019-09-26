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
      <van-field
        v-model="form.content"
        type="textarea"
        placeholder="写回答……"
        rows="5"
        autosize
        clearable
      />
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
          content: ''
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this.form.problemId = this.$route.query.problemId
        this.form.problemTitle = this.$route.query.problemTitle
      })
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
      }
    }
  }
</script>

<style scoped>

</style>
