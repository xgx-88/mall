<template>
  <div class="homeRecommend">
    <div v-for="item in recommend" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="text">{{ item.title }}</div>
      </a>
    </div>
    <!-- <button @click='add'>点击</button> -->
    <!-- <div> {{recommend[0].title}}</div> -->
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    add() {},
  },
};
</script>

<style scoped lang="less">
.homeRecommend {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: black !important;
  img {
    width: 70px;
    height: 70px;
  }
}
</style>
