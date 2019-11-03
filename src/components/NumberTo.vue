<template>
  <span ref="numberGrow" :data-time ="time" :data-value="value">{{value}}</span>
</template>

<script>
export default {
  name: 'numberto',
  props: {
    time: {
      type: Number,
      default: 2,
    },
    value: {
      type: Number,
      default: 1000
    }
  },
  data(){
    return{
      
    }
  },
  methods: {
    numberGrow () {
      // 保持this
      let that = this
      let step = (that.value * 10) / (that.time * 1000)
      let start = 0
      // 设置定时器
      let timeout = setInterval(() => {
        start += step // 开始跑步
        if (start > that.value) {
          clearInterval(timeout)
          start = that.value
          timeout = null
        }
        that.$el.innerHTML = parseInt(start)
      },10)
    }
  },
  mounted() {
    this.numberGrow(this.$refs.numberGrow)
  }
}
</script>