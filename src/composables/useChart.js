import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

/**
 * 一个图表组件的完整生命周期，收在这一个函数里：
 *   挂载后初始化 → 窗口变化时自适应 → 卸载前销毁
 *
 * 用法：
 *   const { el, update } = useChart(() => ({ ...option }))
 * 模板里：
 *   <div ref="el" class="chart"></div>
 *
 * 很多教程把这三件事抄在每个组件里，改起来很痛苦。
 * 抽成 composable 是 Vue3 里最值得掌握的重构手法，
 * 面试时讲「我用 composable 统一了图表的生命周期」比讲「我会用 ECharts」值钱得多。
 */
export function useChart(getOption) {
  const el = ref(null)
  let chart = null

  function resize() {
    chart?.resize()
  }

  onMounted(() => {
    if (!el.value) return
    chart = echarts.init(el.value)
    chart.setOption(getOption())
    window.addEventListener('resize', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    chart?.dispose()
    chart = null
  })

  /** 数据变化后重新渲染（notMerge=true 表示不合并旧配置） */
  function update(option) {
    chart?.setOption(option, true)
  }

  return { el, update, resize }
}
