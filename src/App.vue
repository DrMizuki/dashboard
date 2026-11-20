<template>
  <div class="screen">
    <header class="screen__head">
      <h1 class="screen__title">全国空气质量监测大屏</h1>
      <p class="screen__sub">
        <span class="live-dot"></span>
        实时监测 · 更新于 {{ updatedAt }} · 当前为演示模拟数据
      </p>
    </header>

    <ul class="stats">
      <StatCard v-for="item in overview" :key="item.label" v-bind="item" />
    </ul>

    <main class="grid">
      <ChartCard class="card--bar" title="城市 AQI 排行" subtitle="TOP 10">
        <TopList></TopList>
      </ChartCard>
      <!-- 新增：地图  -->
      <ChartCard class="card--map" title="全国空气质量分布" subtitle="省级 AQI">
        <MapChart></MapChart>
      </ChartCard>

      <ChartCard class="card--line" title="24 小时 AQI 走势" subtitle="北京">
        <LineChart />
      </ChartCard>
      <ChartCard class="card--pie" title="空气质量等级分布" subtitle="全国 339 城">
        <PieChart />
      </ChartCard>
      <ChartCard class="card-radar" title="主要污染物对比" subtitle="北京 vs 上海">
        <RadarChart />
      </ChartCard>
    </main>

    <footer class="screen__foot">数据为演示用模拟数据 · v0.1</footer>
  </div>
</template>

<script setup>
import StatCard from './components/StatCard.vue'
import ChartCard from './components/ChartCard.vue'
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'
import RadarChart from './components/RadarChart.vue'
import MapChart from './components/MapChart.vue'
import TopList from './components/TopList.vue'
import { overview } from './data/mock'

const now = new Date()
const updatedAt = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(
  2,
  '0',
)}`
</script>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  padding: 16px 20px 12px;
}

.screen__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.screen__title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 4px;
  /* 文字渐变：白到青，大屏标题的常用做法 */
  background: linear-gradient(180deg, #ffffff 10%, #35d0ff 130%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.screen__sub {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: var(--text-dim);
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 8px var(--ok);
  animation: pulse 1.8s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.grid {
  /* flex: 1 + min-height: 0：让四张卡片撑满剩余高度 */
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1.35fr 1fr;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

/* 地图：中间一列，跨两行 */
.grid > .card--map {
  grid-column: 2;
  grid-row: 1 / span 2;
}
.grid > .card--bar {
  grid-column: 1;
  grid-row: 1;
}
.grid > .card--line {
  grid-column: 1;
  grid-row: 2;
}
.grid > .card--pie {
  grid-column: 3;
  grid-row: 1;
}
.grid > .card--radar {
  grid-column: 3;
  grid-row: 2;
}

.screen__foot {
  font-size: 10px;
  letter-spacing: 1px;
  text-align: center;
  color: rgba(123, 145, 180, 0.6);
}

@media (max-width: 900px) {
  .screen {
    height: auto;
    padding: 14px;
  }

  .stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .grid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: none;
    grid-auto-rows: 300px;
  }
  .grid > [class^='card--'] {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
