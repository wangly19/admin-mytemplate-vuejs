<template>
  <div class="login flex">
    <div class="poster hg-all">
      <div class="progress flex fx-jc-sa">
        <div :class="`item wd-all hg-all ${active === index ? 'active': ''}`  " v-for="(value,index) in imgSums" :key="index" @click="taggerImage(index)"/>
      </div>
      <div class="imgs wd-all hg-all">
        <div :class="`item wd-all hg-all ${active === index ? 'active': ''}`" v-for="(value,index) in imgSums" :key="index">
          <img :src="value" alt="宣传">
        </div>
      </div>
    </div>
    <el-card class="box-card hg-all">
      <div class="containerbox">
        <header>
          <h3><i class="tx-main el-icon-s-opportunity" />  Admin System</h3>
          <h2>Login</h2>
        </header>
        <el-form :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.username" autocomplete="on" placeholder="请输入账号">
              <i slot="prefix" class="iconfont icon-dianhua" />
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" :type="type ? 'text' : 'password'">
              <i slot="prefix" class="iconfont icon-mima" />
              <i slot="suffix" class="el-input__icon el-icon-view" @click="showPassword" />
            </el-input>
          </el-form-item>
          <el-checkbox v-model="commitUsername">记住我的账号</el-checkbox>
          <div>
            <el-button type="primary" :loading="loading" @click.native.prevent="toLogin" class="wd-all">登录</el-button>
          </div>
          <div class="txt-right">
            <el-link type="info" class="pd-1">忘记密码？</el-link>
            <el-link type="primary" class="pd-1">注册新账号</el-link>
          </div>
        </el-form>
        <footer>
          <h6 class="txt-center">©ALIMAMA MUX, powered by alimama THX.法律声明，本项目个人开发，如果对您有帮助，不妨点一个star给我吧。</h6>
        </footer>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      type: false,
      commitUsername: false,
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loading: false,
      imgSums: [
        'https://gcddblue.gitee.io/vue-admin-webapp/static/img/loginBg.af7d3057.jpg',
        'http://b-ssl.duitang.com/uploads/item/201605/20/20160520020627_QcN8L.jpeg',
        'http://bbs-fd.zol-img.com.cn/t_s800x5000/g5/M00/01/0C/ChMkJ1q4HSGIH5agAAXqeBCtT7oAAnBuACAzuQABeqQ595.jpg'],
      active: 0
    }
  },
  methods: {
    showPassword(){
      this.type = !this.type
    },
    // 登录方法
    toLogin() {
      this.loading = true
      localStorage.setItem('login-user',this.loginForm.username)
      this.$store.dispatch('login',this.loginForm).then(()=> {
        this.$router.push({path: this.reqirect || '/'})
        this.loading = false
      })
      .catch(() => {
        localStorage.setItem('login-user',this.loginForm.username)
        this.loading = false
      })
    },
    taggerImage(index){
      this.active = index
    }
  },
  created(){
  },
}
</script>

<style lang="scss">
@import '@/styles/overall.scss';
$card-width: 25%;
$poster-width: 75%;
.login {
  height: 100vh;
  overflow: hidden;
  .poster {
    width: $poster-width;
    .imgs {
      position: relative;
      .item{
        position: absolute;
        background: #5FB878;
      }
      .active {
        z-index: 8;
      }
    }
    .progress {
      width: 450px;
      position: fixed;
      bottom: 8%;
      left: 4%;
      z-index: 9;
      .item {
        background-color: white;
        width: 70px;
        height: 3px;
        opacity: .4;
      }
      .active {
        opacity: .8;
        z-index: 8;
      }
    }
  }
  .el-card {
    width: $card-width;
    $container-width: 80%;
    .containerbox {
      width: $container-width;
      margin: 10% auto;
      header{
        h2 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      }
      .el-form {
        height: auto;
        .el-checkbox {
          padding-bottom: 10px;
        }
      }
      footer{
        position: fixed;
        bottom: 10%;
      }
    }
  }
}
</style>