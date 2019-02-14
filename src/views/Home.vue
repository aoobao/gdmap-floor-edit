<template>
  <div class="home" @mouseup="cancelDrag" @mousemove="mousemove">
    <div class="floor-select">
      <FloorTree />
    </div>
    <div class="context">
      <!-- <router-view/> -->
      <template v-if="hasChild != null">
        <ImageEdit v-if="hasChild" />
        <EditMap v-else />
      </template>
    </div>
    <DragFeature :feature="dragPoint" :top="y" :left="x" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import FloorTree from './FloorTree'
import EditMap from './EditMap'
import ImageEdit from './ImageEdit'
import DragFeature from './DragFeature'
export default {
  name: 'home',
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  components: {
    FloorTree, EditMap, ImageEdit, DragFeature
  },
  computed: {
    ...mapGetters(['activeTree', 'dragId', 'dragPoint']),
    hasChild () {
      if (this.activeTree === null) return null
      return !!(this.activeTree.children && this.activeTree.children.length > 0)
    }
  },
  methods: {
    cancelDrag () {
      if (this.dragId != null) {
        this.$store.commit('setDragId', null)
      }
    },
    mousemove (e) {
      this.x = e.clientX
      this.y = e.clientY
    }
  },
  watch: {
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
