<template>
  <div id="divout">
    <div class="imgdiv" v-for="item in banner" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" />
        <!-- <div class="title">标题文本1</div> -->
      </a>
    </div>
    <div class="dotdiv">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <!-- <div id="arrow">
      <span class="prev" onClick="picplay(false)">&lt;</span>
      <span class="next" onClick="picplay(true)">&gt;</span>
    </div> -->
  </div>
</template>

<script>
var imgIndex = 0;
var imgDivArr = document.getElementsByClassName("imgdiv");
var dotArr = document.getElementsByClassName("dot");
function picplay(r) {
  for (let i = 0; i < imgDivArr.length; i++) {
    imgDivArr[i].style.display = "none";
    dotArr[i].className = "dot";
  }
  if (r) {
    imgIndex++;
    imgIndex = imgIndex >= imgDivArr.length ? 0 : imgIndex;
  } else {
    imgIndex--;
    imgIndex = imgIndex < 0 ? imgDivArr.length - 1 : imgIndex;
  }
  imgDivArr[imgIndex].style.display = "block";
  dotArr[imgIndex].className = "dot active";
}
setInterval(picplay, 3000, true);
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped lang="less">
#divout {
  max-width: 1000px;
  position: relative;
  margin: 0 auto;
  .imgdiv {
    display: none;
    img {
      width: 100%;
      animation: fade 1.5s;
      // .title {
      //   font-size: 18px;
      //   color: #f2f2f2;
      //   position: absolute;
      //   text-align: center;
      //   font-weight: 700;
      //   width: 100%;
      //   bottom: 10px;
      // }
    }
  }
  .dotdiv {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 10px;
    .dot {
      width: 12px;
      height: 12px;
      display: inline-block;
      background: #bbbbbb;
      border-radius: 10px;
      margin: 0 12px;
    }
  }
  #arrow {
    position: absolute;
    top: 50%;
    margin-top: -30px;
    width: 100%;
    transition: opacity 2s;
    cursor: pointer;
  }
}

.active {
  background-color: red;
}
#divout:hover #arrow {
  opacity: 0.9;
}

@keyframes fade {
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}
/* .prev,
.next {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: white;
}
.prev {
  float: left;
}
.next {
  float: right;
} */
</style>
