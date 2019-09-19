<template>
  <div>
    <van-cell-group>
      <van-field
      v-model="form.title"
      label="问题"
      type="textarea"
      placeholder="请输入问题，并以问号结尾"
      rows="1"
      autosize
      clearable
      />
      <van-field
      v-model="form.details"
      label="描述"
      type="textarea"
      placeholder="对问题补充说明"
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
  import {Field,CellGroup,Button,Cell } from 'vant'
  import {create} from '@/api/problem'
    export default {
      name: "problem",
      components: {
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
        [Cell.name]: Cell
      },
      data() {
          return {
            form: {
              userId: 1,
              title: '',
              details: ''
            }
      }
      },
      methods: {
        //发布按钮
        doRelease(){
          create(this.form).then(res =>{
            alert("a")
          })
        }
      }
    }
</script>

<style scoped>

</style>
