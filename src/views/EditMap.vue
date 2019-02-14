<template>
  <div class="edit-container">
    <div class="map-container" ref="map"></div>
    <div class="point-context">
      <div v-for="item in featureList" :key="item.id" class="button-text" @mousedown="chooseFeature(item,$event)">
        {{item.title}}
      </div>
    </div>
    <template v-if="map != null">
      <MapPoint v-for="point in pointList" :key="point.id" :feature="point" :map="map" @dragend="dragend(point,$event)" />
    </template>
  </div>
</template>
<script>
import { getPointList } from '@/assets/mock'
import MapPoint from './MapPoint'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      map: null,
      imageUrl: './image/image_map.png',
      imageWidth: 4731,
      imageHeight: 4211
    }
  },
  computed: {
    ...mapGetters(['pointList', 'dragId']),
    x () {
      return this.imageWidth / 1000
    },
    y () {
      return this.imageHeight / 1000
    },
    featureList () {
      return this.pointList.filter(t => t.longitude == null)
    }
  },
  components: { MapPoint },
  created () {
    this.$store.commit('setPointList', getPointList())
  },
  mounted () {
    let bounds = new AMap.Bounds([0, 0], [this.x, this.y])
    let imageLayer = new AMap.ImageLayer({
      bounds,
      url: this.imageUrl,
      opacity: 1,
      visible: true,
      zIndex: 1
    })
    this.map = new AMap.Map(this.$refs.map, {
      zooms: [7, 18],
      viewMode: '2d',
      center: [this.x / 2, this.y / 2],
      zoom: 9,
      keyboardEnable: false,
      expandZoomRange: true,
      layers: [imageLayer]
    })
    // 设置地图有效位置
    this.map.setLimitBounds(bounds)

    this.map.setBounds(bounds)

    this.map.on('mouseup', (e) => {
      // console.log('mouseup', e)
      this.setPoint(e)
    })

    // this.map.on('mouseover', (e) => {
    //   console.log('mouseover', e)
    // })
  },
  methods: {
    chooseFeature (item, e) {
      this.$store.commit('setDragId', item.id)
      e.preventDefault()
    },
    setPoint (e) {
      if (this.dragId != null) {
        let lnglat = e.lnglat
        let x = lnglat.getLng()
        let y = lnglat.getLat()
        this.$store.commit('setPointXY', {
          id: this.dragId, x, y
        })
      }
    },
    dragend (point, e) {
      console.log(point, e)
      let id = point.id
      let x = e.lnglat.getLng()
      let y = e.lnglat.getLat()
      this.$store.commit('setPointXY', { id, x, y })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-container {
  width: 100%;
  height: 100%;
  display: flex;
  .map-container {
    width: 100%;
    height: 100%;
    background-color: bisque;
  }

  .point-context {
    width: 200px;
    height: 100%;
    flex-shrink: 0;
    .button-text {
      cursor: pointer;
      width: 80%;
      height: 40px;
      border: 1px solid #000;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto 0;
    }
  }
}
</style>
