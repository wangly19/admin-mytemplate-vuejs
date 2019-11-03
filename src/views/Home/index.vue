<template>
  <div class="home">
      <div class="number flex fx-jc-bt">
        <myCard v-for="(item,index) in cardView" :key="index" :value="item.value" :title="item.title"/>
      </div>
      <div class="aside flex fx-jc-bt">
        
        
        <el-card class="box-card wd-all">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <div class="text item">
            <ve-histogram :data="chartData"></ve-histogram>
          </div>
        </el-card>

        
        <el-card class="box-card wd-all">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          
          <div class="text item">
            <ve-histogram :data="chartData"></ve-histogram>
          </div>
        </el-card>

      </div>
      <div class="footer">
        <el-card class="box-card">
          <div class="text item">
            <ve-line :data="chartData"></ve-line>
          </div>
        </el-card>
      </div>
      <!-- <TagCard></TagCard> -->
      
  </div>
</template>

<script>
// import TagCard from '@/components/TagCard'
import myCard from '@/components/myCard'
import homeAPI from '@/api/res/home-api'
export default {
  data() {
    return {
      cardView: [],
      chartData: {}
    }
  },
  components: {myCard},
  mounted() {
    homeAPI().then(res => {
      this.cardView = res.data.HomeData.cardView
      this.chartData = res.data.HomeData.chartData
    })
  }
}
</script>

<style lang="scss">
.home { 
  .box-card{
    margin: 15px;
    .size{
      font-size: 50px;
    }
  }
}
</style>