<template>
  <div class="container">
    <div class="nav-bar">
      <Button type="primary" style="margin-left:10px;" @click="dialogShow = true">楼层图上传</Button>
      <Button type="error" style="margin-left:10px;">楼层图删除</Button>
    </div>
    <div class="imagelist">
      <Modal v-model="dialogShow" title="图片上传" :width="500" ok-text="上传" cancel-text="取消">
        <Tabs type="card">
          <Tab-pane label="单楼层图上传">
            <div class="tab-context">
              <Form :model="form" :label-width="80">
                <Form-item label="建筑">
                  <Select v-model="form.selectBuild" placeholder="请选择">
                    <Option value="1">创业大楼A幢</Option>
                    <Option value="2">创业大楼B幢</Option>
                  </Select>
                </Form-item>
                <Form-item label="楼层">
                  <Select v-model="form.selectFloor" placeholder="请选择">
                    <Option value="111">1F</Option>
                    <Option value="2222">2F</Option>
                    <Option value="3333">3F</Option>
                  </Select>
                </Form-item>
                <Form-item label="图片">
                  <div class="image-choose" :style="getImageStyle()">
                    <input class="image-file" type="file" accept="image/png,image/jpeg" @change="chooseImage" />
                  </div>

                </Form-item>
              </Form>
            </div>
          </Tab-pane>
          <Tab-pane label="多楼层图上传">
            <div class="tab-context">
              aaabbbbb
            </div>
          </Tab-pane>
        </Tabs>
        <!-- <div slot="footer">
        </div> -->
      </Modal>
      <ImageCard v-for="i in 10" :key="i" src="./image/image_map.png" />
      <div class="more-list">
        <!-- <Button type="text" >
          <span v-if="!loading">点击加载更多</span>
          <span v-else>加载中...</span>
        </Button> -->
        <Button type="text">Text</Button>
      </div>
    </div>
  </div>
</template>
<script>
import ImageCard from '@/components/ImageCard'
export default {
  components: { ImageCard },
  data () {
    return {
      dialogShow: false,
      form: {
        selectBuild: null,
        selectFloor: null,
        imageBase: null
      },
      loading: false
    }
  },
  methods: {
    toLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000);
    },
    chooseImage (e) {
      // console.log(e)
      let file = e.target
      if (file.files.length == 0) {
        // 清除预览
        this.form.imageBase = null
      } else {
        let reader = new FileReader()
        reader.onload = (ev) => {
          // console.log(ev)
          this.form.imageBase = ev.target.result
        }
        reader.readAsDataURL(file.files[0]);
      }
    },
    getImageStyle () {
      if (this.form.imageBase) {
        return {
          backgroundImage: `url(${this.form.imageBase})`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  .nav-bar {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .imagelist {
    width: 100%;
    height: 100%;
    .more-list {
      width: 100%;
      height: 20px;
      clear: both;
      display: flex;
      justify-content: center;
    }
  }
}
.tab-context {
  width: 100%;
  height: 300px;
  .image-choose {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    background-color: blue;
    background-size: 100% 100%;
  }
  .image-file {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
