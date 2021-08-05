<template>
  <div id="tabItems" @click="addRouter" :style="color">
    <slot name="img"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: false,
    };
  },
  props: {
    link: String,
    activeColor: {
      defaut: "red",
      type: String,
    },
  },
  // 判断是否是当前路径
  computed: {
    isActive: {
      get() {
        return this.$route.path.indexOf(this.link) !== -1;
      },
      set(v) {
        this.result = v;
      },
    },
    color: function () {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    addRouter() {
      this.$router.push(this.link);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="less" scoped>
#tabItems {
  width: 25%;
}
</style>
