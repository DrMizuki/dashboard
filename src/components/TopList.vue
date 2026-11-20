<script setup>
import { computed } from 'vue'
import { provinceAqi } from '../data/mock'

//防止改变原数组，先进行复制。
const repeatA = [...provinceAqi]
//计算城市AQI并排序
const MyProvinceAQI = computed(() => {
  const s = repeatA.sort((a, b) => b.value - a.value).slice(0, 10)
  const total = s[0].value
  const s2 = s.map((item) => ({ ...item, radio: (item.value / total) * 100 }))
  return s2
})
</script>
<template>
  <div>
    <ul>
      <li v-for="i in MyProvinceAQI" :key="i.name">
        <span class="name">{{ i.name }}</span>
        <span class="tracker">
          <span class="pre" :style="{ width: i.radio + '%' }"></span>
        </span>
        <span class="value">{{ i.value }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 8px;
}
ul {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
}
.pre {
  display: block;
  height: 16px;
  border-radius: 3px;
  background-color: var(--accent);
}
.name {
  width: 120px;
  flex-shrink: 0;
}
.tracker {
  flex: 1;
}
.value {
  width: 50px;
  flex-shrink: 0;
  text-align: center;
}
</style>
