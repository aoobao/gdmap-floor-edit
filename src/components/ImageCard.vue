<template>
  <div class="image-card-container">
    <div class="image" @click="imageClick" :style="{backgroundImage:`url('${src}')`}">
      <div class="checkbox" @click.stop="checkboxClick">
        <Checkbox :value="single" label="" @input="single = !single"></Checkbox>
      </div>
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '创业大厦A幢>2F'
    },
    src: {
      type: String,
      default: './image/image_map.png'
    }
  },
  data () {
    return {
      single: false
    }
  },
  methods: {
    imageClick () {
      console.log('image click')
    },
    checkboxClick () {
      console.log('checkbox click')
    }
  }
}
</script>

<style lang="scss" scoped>
.image-card-container {
  width: 220px;
  height: 150px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
  display: flex;
  flex-flow: column nowrap;
  .image {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
    .checkbox {
      position: absolute;
      right: -5px;
      top: 3px;
    }
  }
  .title {
    height: 30px;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
