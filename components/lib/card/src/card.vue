<template>
  <div class="ft-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="ft-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="ft-card-summary">{{ summary }}</div>
    <div v-else class="ft-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'FtCard',
  props: {
    // 卡片宽度
    width: {
      type: Number,
      default: 0
    },
    // 卡片图片资源地址
    imgSrc: {
      type: String,
      default: ''
    },
    // 卡片图片的高度
    imgHeight: {
      type: Number,
      default: 0
    },
    // 卡片的概要
    summary: {
      type: String,
      default: ''
    }
  }
};
</script>
