<template>
  <div class="drag-container point-none" v-if="feature != null" :style="getStyle()"></div>
</template>
<script>
export default {
  props: {
    top: Number,
    left: Number,
    feature: Object
  },
  methods: {
    getStyle () {
      // console.log(this.feature)
      let f = this.feature
      let width = f.image.width
      let height = f.image.height
      let src = f.image.src
      return {
        top: this.top - height / 2 + 'px',
        left: this.left - width / 2 + 'px',
        width: width + 'px',
        height: height + 'px',
        backgroundImage: `url('${src}')`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.point-none {
  pointer-events: none !important;
}
.drag-container {
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 9999999999999999;
}
</style>
