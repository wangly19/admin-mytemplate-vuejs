<template>
    <!-- <el-scrollbar class="hg-all" wrap> -->
      <el-menu
      mode="vertical"
      class="el-menu-vertical-demo"
      :collapse-transition="true"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156" 
      text-color="#bfcbd9"
      :unique-opened="false"
      :active-text-color="bindColors.menuActiveText">
        <SlideItem :routes="routes" :collspce="isCollapse"></SlideItem>
      </el-menu>
    <!-- </el-scrollbar> -->
</template>

<script>
import SlideItem from './Slideitem'
import COLORS from '../../../styles/bindcolors.scss'
import {mapGetters} from 'vuex'
export default {
  name: 'SlideBar',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters(['routes','isCollapse'])
  },
  components: {SlideItem},
  methods: {
    bindColors(){
      return COLORS
    }
  }
}
</script>

<style lang="scss">

.el-scrollbar__wrap {
  overflow: scroll;
  overflow-x: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 100px;
  }
</style>