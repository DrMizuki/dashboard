<template>
  <div ref="el" class="chart"></div>
</template>

<script setup>
import { useChart } from '../composables/useChart'
import { tooltip } from '../data/theme'
import { pollutantCompare } from '../data/mock'

const { el } = useChart(() => ({
  tooltip: { ...tooltip, trigger: 'item' },
  legend: {
    bottom: 0,
    icon: 'roundRect',
    itemWidth: 10,
    itemHeight: 4,
    textStyle: { color: '#7b91b4', fontSize: 11 },
  },
  radar: {
    center: ['50%', '45%'],
    radius: '62%',
    indicator: pollutantCompare.indicators,
    axisName: { color: '#7b91b4', fontSize: 11 },
    splitLine: { lineStyle: { color: 'rgba(123, 145, 180, 0.15)' } },
    axisLine: { lineStyle: { color: 'rgba(123, 145, 180, 0.15)' } },
    splitArea: {
      areaStyle: {
        // 交替的两个半透明圈，雷达图的网格感就出来了
        color: ['rgba(53, 208, 255, 0.03)', 'rgba(53, 208, 255, 0.07)'],
      },
    },
  },
  series: [
    {
      type: 'radar',
      symbolSize: 4,
      data: pollutantCompare.series.map((s) => ({
        name: s.name,
        value: s.value,
        lineStyle: { width: 2, color: s.color },
        itemStyle: { color: s.color },
        areaStyle: { color: s.color, opacity: 0.18 },
      })),
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
