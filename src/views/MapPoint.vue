<script>
import PointMarker from '@/assets/PointMarker'
export default {
  props: {
    feature: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    }
  },
  computed: {
    show () {
      if (this.feature) {
        if (this.feature.longitude != null && this.feature.latitude != null) {
          return true
        }
      }
      return false
    }
  },
  data () {
    return {
      marker: null
    }
  },
  created () {
    this.clickHandle = this.clickHandle.bind(this)
    if (this.feature.longitude != null) {
      this.addMarker()
    }
  },
  beforeDestroy () {
    if (this.marker) {
      this.removeMarker()
    }
  },
  methods: {
    clickHandle () { },
    dragendHandle (data, e) { this.$emit('dragend', e) },
    addMarker () {
      if (this.marker == null) {
        let p = this.feature
        this.marker = new PointMarker(this.map, {
          position: [p.longitude, p.latitude],
          imageStyle: p.image,
          text: p.title,
          click: this.clickHandle,
          dragend: this.dragendHandle
        })

      }
      if (this.show) {
        this.marker.show()
      }
    },
    removeMarker () {
      if (this.marker) {
        this.marker.destory()
        this.marker = null
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.addMarker()
      } else {
        if (this.marker) this.marker.hide()
      }
    }
  },
  render () {
    return null
  }
}
</script>
