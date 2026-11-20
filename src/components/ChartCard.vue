<template>
  <section class="card">
    <header class="card__head">
      <h2 class="card__title">{{ title }}</h2>
      <span v-if="subtitle" class="card__sub">{{ subtitle }}</span>
    </header>
    <div class="card__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 14px 8px;
  border-bottom: 1px solid rgba(64, 158, 255, 0.1);
}

.card__title {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--text);
}

/* 标题前那条青色竖线 */
.card__title::before {
  content: '';
  width: 3px;
  height: 12px;
  margin-right: 8px;
  border-radius: 2px;
  background: var(--accent);
}

.card__sub {
  font-size: 11px;
  color: var(--text-dim);
  white-space: nowrap;
}

/* flex: 1 + min-height: 0 是让图表撑满剩余高度的关键 */
.card__body {
  flex: 1;
  min-height: 0;
  padding: 8px 12px 12px;
}
</style>
