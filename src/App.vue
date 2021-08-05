<template>
  <div id="app">
    <router-view></router-view>
    <main-tab></main-tab>
  </div>
</template>
<script>
import mainTab from "./components/tabbar/mainTab.vue";
export default {
  components: {
    mainTab,
  },
};
</script>

<style lang="less" scoped>
@import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
