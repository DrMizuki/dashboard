/* ============================================================
   演示数据（v0.1 阶段先写死）
   下一步（v0.5）：把这里换成从接口 / 爬虫拿到的真实数据，
   组件代码一行都不用改 —— 这就是「数据与视图分离」的好处。
   ============================================================ */

/** 顶部四个数字卡 */
export const overview = [
  { label: '监测城市', value: '339', unit: '座', color: '#35d0ff' },
  { label: '全国平均 AQI', value: '92', unit: '', color: '#ffd15c' },
  { label: '优良天数占比', value: '76.4', unit: '%', color: '#3ddc97' },
  { label: '重度污染城市', value: '8', unit: '座', color: '#ff6b81' },
]

/** 城市 AQI 排行（降序） */
export const cityRank = [
  { name: '石家庄', aqi: 168 },
  { name: '太原', aqi: 152 },
  { name: '郑州', aqi: 141 },
  { name: '西安', aqi: 133 },
  { name: '重庆', aqi: 126 },
  { name: '成都', aqi: 118 },
  { name: '武汉', aqi: 109 },
  { name: '北京', aqi: 97 },
  { name: '上海', aqi: 84 },
  { name: '广州', aqi: 71 },
]

/** 北京 24 小时 AQI 走势 */
const aqi24h = [
  112, 105, 98, 91, 88, 84, 79, 76, 73, 70, 68, 72,
  79, 88, 96, 101, 106, 110, 115, 120, 117, 112, 108, 110,
]

export const hourlyTrend = aqi24h.map((aqi, i) => ({
  hour: `${String(i).padStart(2, '0')}:00`,
  aqi,
}))

/** 全国空气质量等级分布（合计 339 城） */
export const levelDist = [
  { name: '优', value: 82, itemStyle: { color: '#3ddc97' } },
  { name: '良', value: 151, itemStyle: { color: '#35d0ff' } },
  { name: '轻度污染', value: 78, itemStyle: { color: '#ffd15c' } },
  { name: '中度污染', value: 20, itemStyle: { color: '#ff9f43' } },
  { name: '重度污染', value: 8, itemStyle: { color: '#ff6b81' } },
]

/** 主要污染物对比（北京 vs 上海） */
export const pollutantCompare = {
  indicators: [
    { name: 'PM2.5', max: 150 },
    { name: 'PM10', max: 200 },
    { name: 'SO₂', max: 40 },
    { name: 'NO₂', max: 80 },
    { name: 'CO', max: 2 },
    { name: 'O₃', max: 160 },
  ],
  series: [
    { name: '北京', value: [97, 120, 12, 48, 1.1, 88], color: '#ff6b81' },
    { name: '上海', value: [58, 76, 8, 39, 0.8, 102], color: '#35d0ff' },
  ],
}
