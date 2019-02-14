<template>
  <div class="home">
    <div class="floor-select">
      <FloorTree @click="treeClick" />
    </div>
    <div class="context">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FloorTree from './FloorTree'
export default {
  name: 'home',
  components: {
    FloorTree
  },
  methods: {
    treeClick (e) {
      // console.log(data)
      let data = e.data
      if (data.children && data.children.length > 0) {
        // this.$router.push({ name: 'imageedit' })
      } else {
        this.$router.push({ name: 'viewmap' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  .floor-select {
    width: 300px;
    height: 100%;
    flex-shrink: 0;
  }
  .context {
    width: 100%;
    height: 100%;
  }
}
</style>
