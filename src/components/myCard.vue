<template>
  <el-card class="box-card wd-all">
    <div class="text item flex fx-it-center fx-jc-bt">
      <i class="iconfont icon-weixin size"></i>
      <div>
        <h2>{{title}}</h2>
        <h2><count :value="value"/></h2>
      </div>
    </div>
  </el-card>
</template>


<script>
import count from './NumberTo'
  export default {
    props:{
      value:{ 
        type: Number,
        default: 666,
      },
      title: {
        type: String,
        default: 'News Data'
      }
    },
    data() {
      return {

      }
    },
    components: {count}
  }
</script>

<style lang="scss" scoped>
h2{
  color: #ccc;
}
</style>