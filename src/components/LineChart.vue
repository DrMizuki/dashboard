<template>
  <div ref="el" class="chart"></div>
</template>

<script setup>
import { useChart } from '../composables/useChart'
import { axisLabel, fadeDown, splitLine, tooltip } from '../data/theme'
import { hourlyTrend } from '../data/mock'

const { el } = useChart(() => ({
  grid: { top: 24, right: 20, bottom: 6, left: 6, containLabel: true },
  tooltip: {
    ...tooltip,
    trigger: 'axis',
    valueFormatter: (v) => `${v} AQI`,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: hourlyTrend.map((d) => d.hour),
    // interval: 3 表示每隔 3 个显示一个刻度，不然 24 个挤成一团
    axisLabel: { ...axisLabel, interval: 3 },
    axisLine: { lineStyle: { color: 'rgba(123, 145, 180, 0.25)' } },
    axisTick: { show: false },
  },
  yAxis: {
    type: 'value',
    axisLabel,
    splitLine,
    axisLine: { show: false },
  },
  series: [
    {
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: hourlyTrend.map((d) => d.aqi),
      lineStyle: { width: 2, color: '#ffd15c' },
      itemStyle: { color: '#ffd15c' },
      areaStyle: { color: fadeDown('255, 209, 92') },
      // 自动标出一天中的峰值
      markPoint: {
        symbolSize: 30,
        label: { fontSize: 10, color: '#06101f', fontWeight: 600 },
        itemStyle: { color: '#ffd15c' },
        data: [{ type: 'max', name: '峰值' }],
      },
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
