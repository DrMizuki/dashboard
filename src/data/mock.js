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
  { name: '石家庄', aqi: 200 },
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
  112, 105, 98, 91, 88, 84, 79, 76, 73, 70, 68, 72, 79, 88, 96, 101, 106, 110, 115, 120, 117, 112,
  108, 110,
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

/**
 * 各省 AQI（给地图用）
 *
 * ⚠️ 这里最容易踩的坑：
 * name 必须和 china.json 里的 properties.name 一字不差。
 * 地图里叫「北京市」，你写「北京」——数据就落不上色，而且不报错，只是空白。
 */
export const provinceAqi = [
  { name: '北京市', value: 97 },
  { name: '天津市', value: 105 },
  { name: '河北省', value: 168 },
  { name: '山西省', value: 152 },
  { name: '内蒙古自治区', value: 88 },
  { name: '辽宁省', value: 112 },
  { name: '吉林省', value: 96 },
  { name: '黑龙江省', value: 84 },
  { name: '上海市', value: 84 },
  { name: '江苏省', value: 118 },
  { name: '浙江省', value: 58 },
  { name: '安徽省', value: 126 },
  { name: '福建省', value: 45 },
  { name: '江西省', value: 62 },
  { name: '山东省', value: 141 },
  { name: '河南省', value: 156 },
  { name: '湖北省', value: 109 },
  { name: '湖南省', value: 78 },
  { name: '广东省', value: 71 },
  { name: '广西壮族自治区', value: 52 },
  { name: '海南省', value: 32 },
  { name: '重庆市', value: 126 },
  { name: '四川省', value: 118 },
  { name: '贵州省', value: 48 },
  { name: '云南省', value: 38 },
  { name: '西藏自治区', value: 25 },
  { name: '陕西省', value: 133 },
  { name: '甘肃省', value: 102 },
  { name: '青海省', value: 41 },
  { name: '宁夏回族自治区', value: 115 },
  { name: '新疆维吾尔自治区', value: 92 },
  { name: '台湾省', value: 44 },
  { name: '香港特别行政区', value: 39 },
  { name: '澳门特别行政区', value: 41 },
]
