<template>
  <div class="menu-item">
    <template v-for="item in routes">
      <!-- 如果存在子节点，并且当前路由不隐藏的的话 -->
      <div v-if="item.children && !item.hidden" :key="item.name">
        <router-link v-if="item.children.length === 1 && !item.children[0].children && !item.alwaysShow"
        :to="`${item.path}/${item.children[0].path}`" :key= "item.children[0].name">
        <!-- el-menu-item组件绑定路由 -->
        <el-menu-item :index ="`${item.path}/${item.children[0].path}`">
          <i :class="`iconfont ${item.children[0].meta.icon} pd-1`"></i>
          <span v-if="item.children[0].meta && item.children[0].meta.title && !collspce">{{item.children[0].meta.title}}</span>
        </el-menu-item>
        </router-link>

        <!-- 树状节点 -->
        <el-submenu v-else :index="item.name||item.path" >
          <template slot="title">
            <i :class="`iconfont ${item.meta.icon} pd-1`"></i>
            <span v-if="item.meta && item.meta.title && !collspce">{{item.meta.title}}</span>
          </template>

          <!-- 遍历子路由 -->
          <template v-for="child in item.children">
            <div v-if="!child.hidden" :key="child.name">
              <SlideItem :is-ntest="true" class="nest-menu" v-if="child.children&&child.children.length > 0"
              :routrs="[child]" :key="child.path"></SlideItem>
              <router-link v-else :to ="`${item.path}/${child.path}`" :key="child.name">
                <el-menu-item :index="`${item.path}/${child.path}`">
                  <i :class="`iconfont ${child.meta.icon}  pd-1`"></i>
                  <span v-if="child.meta && child.meta.title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </div>
          </template>
        </el-submenu>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    },
    collspce: {
      type: Boolean,
    }
  },
  data(){
    return {
    }
  },
  computed: {}
}
</script>

<style lang="scss">
</style>