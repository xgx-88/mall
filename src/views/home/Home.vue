<template>
  <div class="home">
    <navTab class="navColor">
      <div slot="center">购物车首页</div>
    </navTab>
    <lunbo :banner="banner"></lunbo>
    <homeRecommend :recommend="recommend"></homeRecommend>
    <weekPop></weekPop>
  </div>
</template>

<script>
import { getMultidata } from "@/network/home";
// 这里引入函数名不是整个文件
import navTab from "@/components/common/navbar/navBar.vue";
import lunbo from "@/components/common/lunbo/lunbo.vue";
import homeRecommend from "./homeViews/homeRecommend.vue";
import weekPop from "./homeViews/weekPop.vue";
export default {
  name: "Home",
  components: {
    navTab,
    lunbo,
    homeRecommend,
    weekPop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  computed: {},
  created() {
    getMultidata().then((res) => {
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  methods: {},
};
</script>
<style scoped lang="less">
.navTab {
  background-color: pink;
}
</style>
