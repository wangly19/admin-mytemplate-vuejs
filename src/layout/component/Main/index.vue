<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!-- 添加路由视图 -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data(){
    return {}
  },
  computed: {}
}
</script>
