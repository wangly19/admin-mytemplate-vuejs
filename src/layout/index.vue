<template>
  <div class="app-wraper flex">
    <Slidebar class="slidebar vh-100"></Slidebar>
    <div class="main-container wd-all">
      <div class="app-header">
        <HeaderNav></HeaderNav>
      </div>
      <div class="app-main">
        <AppMain></AppMain>
      </div>
    </div>
  </div>
</template>

<script>
  import Slidebar from './component/SlideBar'
  import AppMain from './component/Main'
  import HeaderNav from './component/HeaderNav'

  export default {
    name: 'container',
    data() {
      return {}
    },
    computed: {},
    components: {
      Slidebar,
      AppMain,
      HeaderNav
    }
  }
</script>

<style lang="scss">
.app-wraper {
  position: relative;
  .slidebar {
  }
  .main-container{
    overflow: scroll;
    overflow-x: hidden;
    max-height: 100vh;
  }
}
</style>