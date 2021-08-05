<template>
  <div class="navTab">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.navTab {
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-around;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>
