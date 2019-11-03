<template>
  <el-menu mode="horizontal" class="header-nav flex">
    <div class="togger-btn">
      <i :class="`${flag ? 'el-icon-s-unfold': 'el-icon-s-fold'} ft-3`" @click="toggerSlidebar"></i>
    </div>
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar" @click="setCommand('logout')"></el-avatar>
    <el-dropdown trigger="click" @command="setCommand" class="logout">
      <span class="el-dropdown-link">
        {{token }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人资料</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item command="logout">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<style lang="scss">
  .header-nav {
    height: 60px;
    line-height: 60px;

    .togger-btn {
      position: absolute;
      left: 20px;
    }

    .avatar{
      position: absolute;
      right: 100px;
      top: 5px;
    }
    
    .logout{
      position: absolute;
      right: 10px;
    }
  }
</style>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        flag: false,
        seachs: ''
      }
    },
    computed: {
      ...mapGetters(['token']),
    },
    methods: {
      setCommand(command) {
        switch (command) {
          case 'logout': {
            this.$store.dispatch('loginout').then(() => {
              // 退出成功，弹出message
              this.$message({
                message: '退出账号成功',
                type: 'success'
              })
              // 回到LOGIN 页面
              this.$router.replace('/login')
            })
          }
          break
        }
      },
      toggerSlidebar() {
        // 切换侧边栏
        this.flag = !this.flag
        window.console.log(this.flag)
        this.$store.dispatch('switchSlidebar', this.flag)
      }
    }
  }
</script>