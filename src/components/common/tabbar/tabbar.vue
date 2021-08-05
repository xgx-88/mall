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
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.1);
  background-color: #f6f6f6;
  display: flex;
  flex: 1;
  justify-content: space-around;
  p {
    margin: 0;
  }
}
</style>
