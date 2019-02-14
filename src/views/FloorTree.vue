<template>
  <Tree :data="treeList" :render="renderContent"></Tree>
</template>
<script>
import { mapGetters } from 'vuex'
import { getTreeList } from '@/assets/mock.js'
export default {
  data () {
    return {
      treeList: []
    }
  },
  computed: {
    ...mapGetters(['activeTree'])
  },
  mounted () {
    setTimeout(() => {
      this.treeList = getTreeList()
      this.$store.commit('setActiveTree', { ...this.treeList[0] })
    }, 500);

  },
  methods: {
    renderContent (h, { root, node, data }) {
      let active = this.activeTree || {}
      let title = <span class={['ivu-tree-title', {
        'ivu-tree-title-selected': active.id == data.id
      }]} onClick={() => { this.treeClick(root, node, data) }}>{data.title}</span>
      if (data.children && data.children.length > 0) {
        return title
      } else {
        return (
          <span class='ivu-tree-custom'>
            {title}
            {
              data.image != null ?
                <span class='ivu-tree-image' ></span> //style={{ backgroundImage: `url('${data.image.url}')` }}
                : null
            }
          </span>
        )
      }
    },
    treeClick (root, node, data) {
      // console.log(root, node, data)
      this.$store.commit('setActiveTree', { ...data, expand: data.expand })
      this.$emit('click', { root, node, data })
    }
  }
}
</script>
<style lang="scss">
.ivu-tree-custom {
  width: 90%;
  height: 18px;
  display: inline-block;
  .ivu-tree-image {
    display: inline-block;
    width: 36px;
    height: 18px;
    background-size: 100% 100%;
    background-color: blue;
  }
}
// .ivu-tree-title {
//   background-color: blue !important;
//   &:hover {
//     background-color: red;
//   }
// }
</style>
