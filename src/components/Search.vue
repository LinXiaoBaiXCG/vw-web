<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="showSearchPopup"
    >
      <div slot="action" @click="showSearchPopup">搜索</div>
    </van-search>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '92%' }"
      :overlay="overlay"
    >
      <van-sticky :offset-top="50">
        <van-cell title="搜索结果:">
          <van-icon
            slot="right-icon"
            name="close"
            style="line-height: inherit;"
            @click="doClose"
            size="20"
          />
        </van-cell>
      </van-sticky>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
      <van-cell title="操作" icon="records"/>
    </van-popup>
  </div>
</template>

<script>
  import { Search, Popup, Cell, Sticky, Icon, Toast } from 'vant'
    export default {
      name: "Search",
      components: {
          [Search.name]:Search,
          [Popup.name]:Popup,
          [Cell.name]:Cell,
          [Sticky.name]:Sticky,
          [Icon.name]:Icon,
          [Toast.name]:Toast,
      },
      data() {
        return {
          show: false,
          overlay: false,
          value: ''
        }
      },
      methods: {
        showSearchPopup(){
          if (this.value === ''){
            Toast('请输入搜索关键词');
          } else {
            this.show = true
          }
        },
        doClose(){
          this.show = false
        }
      }
    }
</script>

<style scoped>

</style>
