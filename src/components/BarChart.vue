<template>
  <div ref="el" class="chart"></div>
</template>

<script setup>
import { useChart } from '../composables/useChart'
import { axisLabel, splitLine, tooltip } from '../data/theme'
import { cityRank } from '../data/mock'

// 横向条形图是从下往上画的，所以先把数据反转，让 AQI 最高的排在最上面
const rows = [...cityRank].reverse()

const { el } = useChart(() => ({
  grid: { top: 10, right: 36, bottom: 6, left: 6, containLabel: true },
  tooltip: {
    ...tooltip,
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    valueFormatter: (v) => `${v} AQI`,
  },
  xAxis: {
    type: 'value',
    axisLabel,
    splitLine,
    axisLine: { show: false },
    axisTick: { show: false },
  },
  yAxis: {
    type: 'category',
    data: rows.map((r) => r.name),
    axisLabel: { ...axisLabel, fontSize: 12 },
    axisLine: { show: false },
    axisTick: { show: false },
  },
  series: [
    {
      type: 'bar',
      data: rows.map((r) => r.aqi),
      barWidth: 11,
      itemStyle: {
        borderRadius: [0, 6, 6, 0],
        // 渐变色不需要 import echarts，直接用配置对象描述就行
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(53, 208, 255, 0.2)' },
            { offset: 1, color: '#35d0ff' },
          ],
        },
      },
      label: {
        show: true,
        position: 'right',
        color: '#7b91b4',
        fontSize: 11,
      },
    },
  ],
}))
</script>

<style scoped>
/* ⚠️ 图表容器必须有明确高度，否则 ECharts 画不出来 */
.chart {
  width: 100%;
  height: 100%;
}
</style>
