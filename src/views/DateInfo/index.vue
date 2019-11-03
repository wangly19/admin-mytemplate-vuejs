<template>
  <div class="schedule">
    <el-card class="box-card">
      <div class="text item flex">
        <div class="schecard txt-center">
          <div class="date">12<span>日</span></div>
          <h3 class="dateinfo">2019年9月21日</h3>
          <div class="message">{{message}}</div>
        </div>
        <el-calendar>
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template
            slot="dateCell"
            slot-scope="{date, data}">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
            </p>
          </template>
        </el-calendar>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Schedule',
  data(){
    return {
      message: '白能量啊啊啊啊啊啊啊啊啊啊啊啊啊',
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule {
  .box-card {
    height: calc(100vh - 100px);
    margin: 15px;
    .schecard{
      width: 20%;
      .date {
        font-size: 9rem;
        span {
          font-size: 1.5rem;
        }
      }
    }
    .el-calendar {
      width: 80%;
    }
  }
}
.is-selected {
  color: #1989FA;
}
</style>