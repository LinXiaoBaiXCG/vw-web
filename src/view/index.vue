<template>
    <div>
        <van-sticky>
        <form action="/">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
        <van-tabs v-model="active" animated>
            <van-tab v-for="index in 4" :title="'选项 ' + home">
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
              内容 {{ home }}<br>
            </van-tab>
        </van-tabs>
        </van-sticky>
        <router-view />
        <van-tabbar route>
            <van-tabbar-item
                    replace
                    to="/home"
                    icon="label"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/notice"
                    icon="bell"
            >
                通知
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>
