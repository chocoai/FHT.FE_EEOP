/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:22:33
 * @Last Modified by: chudequan
 * @Last Modified time: 2018-07-30 20:10:16
 */

<template>
  <div class="tags-view-container">
    <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
      <router-link ref='tag' class="tags-view-item" :class="isActive(tag) ? 'el-button--primary' : ''" v-for="tag in Array.from(visitedViews)"
        :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag, $event)">
        {{tag.name}}
        <span class='el-icon-remove' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
    </scroll-pane>
    <ul class='contextmenu el-dropdown-menu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其它</li>
      <li @click="closeAllTags">全部关闭</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane'

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    sidebar() {
      return this.$store.state.app.sidebar
    }
  },
  watch: {
    $route() {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.addViewTags()
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name || route.path === this.$route.meta.parentPath
    },
    addViewTags() {
      if (!this.$route.name) {
        return false
      }
      let parentRoute = null
      if (this.$route.meta.noTags) {
        parentRoute = {
          meta: this.$route.meta.meta || {},
          name: this.$route.meta.parentName,
          path: this.$route.meta.parentPath
        }
      }
      this.$store.dispatch('addVisitedViews', parentRoute || this.$route)
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag.$el)
            break
          }
        }
      })
    },
    closeSelectedTag(view) {
      const visitedViews = this.$store.state.tagsView.visitedViews
      if (view.name === '首页' && visitedViews.length === 1 && view.name === visitedViews[0].name) {
        return false
      }
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag.path)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags() {
      const visitedViews = this.$store.state.tagsView.visitedViews
      if (visitedViews.length === 1 && visitedViews[0].name === '首页') {
        return false
      }
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    openMenu(tag, e) {
      this.visible = true
      this.selectedTag = tag
      this.left = e.clientX - (this.sidebar.opened ? 180 : 40)
      this.top = e.clientY
    },
    closeMenu() {
      this.visible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.tags-view-container {
  width: calc(100% - 320px);
  display: inline-block;
  .tags-view-wrapper {
    background: #fff;
    height: 49px;
    line-height: 49px;
  }
  .contextmenu {
    margin: 0;
    z-index: 99999;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    color: #333;
    li {
      margin: 0;
      padding: 7px 16px;
      line-height: 1.2;
      cursor: pointer;
      &:hover {
        background: #ecf5ff;
        color: #66b1ff;
      }
    }
  }
}
.tags-view-item {
  display: inline-block;
  position: relative;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #333;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 4px;
  &:first-child{
    margin-left: 0
  }
  &.el-button--primary {
    font-weight: 700;
    &::before {
      content: '';
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
    }
  }
}
</style>
