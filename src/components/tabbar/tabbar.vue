<template>
  <div>
    <div class="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  height: 49px;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  p {
    margin: 0;
  }
}
</style>
