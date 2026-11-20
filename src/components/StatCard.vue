<template>
  <li class="stat" :style="{ '--stat-color': color }">
    <span class="stat__label">{{ label }}</span>
    <span class="stat__main">
      <strong class="stat__value">{{ value }}</strong>
      <em v-if="unit" class="stat__unit">{{ unit }}</em>
    </span>
  </li>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  unit: { type: String, default: '' },
  color: { type: String, default: '#35d0ff' },
})
</script>

<style scoped>
.stat {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  background: linear-gradient(180deg, rgba(53, 208, 255, 0.08), rgba(14, 31, 61, 0.55));
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}

/* 左侧色条跟着 color 属性变 */
.stat::after {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: var(--stat-color);
  opacity: 0.8;
}

.stat__label {
  font-size: 12px;
  color: var(--text-dim);
  letter-spacing: 0.5px;
}

.stat__main {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.stat__value {
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  color: var(--stat-color);
  font-variant-numeric: tabular-nums;
}

.stat__unit {
  font-size: 12px;
  font-style: normal;
  color: var(--text-dim);
}
</style>
