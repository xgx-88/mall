<template>
  <div class="home">
    <navTab class="navColor">
      <div slot="center">购物车首页</div>
      <swiper>
        <swiperItem v-for="item in banner" :key="item">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </swiperItem>
      </swiper>
    </navTab>
  </div>
</template>

<script>
import { getMultidata } from "@/network/home";
// 这里引入函数名不是整个文件
import navTab from "@/components/common/navbar/navBar.vue";
import { swiper, swiperItem } from "@/components/common/swiper/index";
export default {
  name: "Home",
  components: {
    navTab,
    swiper,
    swiperItem,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getMultidata().then((res) => {
      this.banner = res.data.banner;
      this.recommend = res.data.recommend;
    });
  },
};
</script>
<style scoped lang="less"></style>
