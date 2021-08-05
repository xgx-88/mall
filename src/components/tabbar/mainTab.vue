<template>
  <div>
    <tabbar>
      <tabItems link="/home" activeColor="red">
        <img src="@/assets/images/home2.jpg" alt="" slot="img" />
        <p slot="text">首页</p>
      </tabItems>
      <tabItems link="/more" activeColor="red">
        <img src="@/assets/images/sort.jpg" alt="" slot="img" />
        <p slot="text">更多</p>
      </tabItems>
      <tabItems link="/shopcart" activeColor="red">
        <img src="@/assets/images/shopcart.jpg" slot="img" />
        <p slot="text">购物车</p>
      </tabItems>
      <tabItems link="/profile" activeColor="red">
        <img src="@/assets/images/my.jpg" alt="" slot="img" />
        <p slot="text">我的</p>
      </tabItems>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tabbar.vue";
import tabItems from "./tabItems.vue";
export default {
  components: {
    tabbar,
    tabItems,
  },
};
</script>

<style lang="less" scoped>
img {
  width: 25px;
  height: 25px;
}
</style>
