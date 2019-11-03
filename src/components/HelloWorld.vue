<template>
  <div class="hello">
    <count :value="value"></count>
    <number :value ="value"></number>
  </div>
</template>

<script>
import count from './Count'
import number from './NumberTo'
export default {
  name: 'HelloWorld',
  data(){
    return {
      value: 20103
    }
  },
  props: {
  },
  components: {count,number}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
