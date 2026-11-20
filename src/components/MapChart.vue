<template>
  <div ref="el" class="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import chinaJson from '../assets/china.json'
import { useChart } from '../composables/useChart'
import { tooltip } from '../data/theme'
import { provinceAqi } from '../data/mock'

echarts.registerMap('china', chinaJson)

const { el } = useChart(() => ({
  tooltip: {
    ...tooltip,
    trigger: 'item',
    formatter: (p) => `${p.name}<br/>AQI ${p.value ?? '暂无数据'}`,
  },
  //颜色图例：把AQI数值映射成颜色深浅
  visualMap: {
    min: 20,
    max: 170,
    left: 16,
    bottom: 16,
    text: ['高', '低'],
    textStyle: { color: '#7b91b4', fontSize: 11 },
    inRange: {
      color: ['#1b3b6f', '#2f7fd4', '#35d0ff', '#ffd15c', '#ff8a3d', '#ff4d4f'],
    },
    calculable: false,
  },
  series: [
    {
      type: 'map',
      map: 'china', //对应上面registerMap的第一个参数
      roam: true, //允许鼠标缩放和拖动
      zoom: 1.1,
      label: { show: false },
      itemStyle: {
        areaColor: '#0e1f3d',
        borderColor: 'rgba(53,208,255,0.35)',
        borderWidth: 0.8,
      },
      emphasis: {
        label: { show: true, color: '#ffffff' },
        itemStyle: { areaColor: '#ffd15c' },
      },
      data: provinceAqi,
    },
  ],
}))
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
