<template>
  <div ref="el" class="chart"></div>
</template>

<script setup>
import { useChart } from '../composables/useChart'
import { tooltip } from '../data/theme'
import { levelDist } from '../data/mock'

const total = levelDist.reduce((sum, d) => sum + d.value, 0)

const { el } = useChart(() => ({
  tooltip: {
    ...tooltip,
    trigger: 'item',
    formatter: (p) => `${p.name}<br/>${p.value} 座 · ${p.percent}%`,
  },
  legend: {
    bottom: 0,
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
    textStyle: { color: '#7b91b4', fontSize: 11 },
  },
  // 环形图中间的统计数字
  graphic: {
    type: 'text',
    left: 'center',
    top: '36%',
    style: {
      text: String(total),
      fill: '#d7e3f4',
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'inherit',
    },
  },
  series: [
    {
      type: 'pie',
      radius: ['44%', '64%'],
      center: ['50%', '44%'],
      itemStyle: {
        borderColor: '#0b1730',
        borderWidth: 2,
        borderRadius: 4,
      },
      label: {
        color: '#7b91b4',
        fontSize: 11,
        formatter: '{b}\n{d}%',
        lineHeight: 15,
      },
      labelLine: {
        length: 8,
        length2: 10,
        lineStyle: { color: 'rgba(123, 145, 180, 0.4)' },
      },
      data: levelDist,
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
