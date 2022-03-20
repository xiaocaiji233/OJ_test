<template>
<div>
   <h2>{{ msg }}</h2>
    <div id="container"></div>
</div>
</template>

<script>
import { Chart } from '@antv/g2';

export default {
    name: 'Tubiao',
     components: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.initComponent();
  },
  data() {
    return {
      msg: "",
      chart: null,
      data: [
      { time: '03-19', type: 'error', value: 7 },
      { time: '03-19', type: 'pass', value: 6 },
      { time: '03-19', type: 'pass', value: 15 },
      { time: '03-19', type: 'pass', value: 7},
      { time: '03-20', type: 'pass', value: 6 },
      { time: '03-20', type: 'pass', value: 35 },
      { time: '03-20', type: 'error', value: 30 },
      { time: '03-20', type: 'pass', value: 27 },
      { time: '03-21', type: 'pass', value: 39 },
      { time: '03-21', type: 'error', value: 37},
      { time: '03-21', type: 'pass', value: 34 },
      { time: '03-21', type: 'pass', value: 30 },
      { time: '03-22', type: 'error', value: 4 },
      { time: '03-22', type: 'pass', value: 42 },
      { time: '03-22', type: 'pass', value: 38 },
      { time: '03-22', type: 'pass', value: 34 },
      { time: '03-23', type: 'pass', value: 47 },
      { time: '03-23', type: 'pass', value: 44 },
      { time: '03-23', type: 'pass', value: 40 },
      { time: '03-23', type: 'error', value: 360 },
      { time: '03-24', type: 'pass', value: 4 },
      { time: '03-24', type: 'error', value: 46 },
      { time: '03-24', type: 'pass', value: 42 },
      { time: '03-24', type: 'pass', value: 38 },
      { time: '03-25', type: 'error', value: 50 },
      { time: '03-25', type: 'pass', value: 48},
      { time: '03-25', type: 'error', value: 44 },
      { time: '03-25', type: 'pass', value: 38 }
      ]
    };
  },
  // 方法集合
  methods: {
    initComponent() {
      // 此函数为个人习惯,喜欢创建一个初始化的函数
      this.msg = "Demo";
      const chart = new Chart({
      container: 'container', 
      autoFit: true,
      height: 500,
    });
      chart.data(this.data);
    chart.scale('value', {
      alias: '提交数据'
    });
    chart.axis('time', {
      tickLine: null,
    });

    chart.axis('value', {
      label: {
        formatter: text => {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
      },
      title: {
        offset: 80,
        style: {
          fill: '#aaaaaa'
        },
      }
    });
    chart.legend({
      position: 'right',
    });

    chart.tooltip({
      shared: true,
      showMarkers: false,
    });
    chart.interaction('active-region');

    chart
      .interval()
      .adjust('stack')
      .position('time*value')
      .color('type', ['#FF0000', '#00FF00', '#096dd9', '#0050b3']);

    chart.render();
  },
  // 计算属性
  computed: {}
}
}
</script>

<style>

</style>