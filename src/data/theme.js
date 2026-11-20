/* ============================================================
   图表公共配置
   抽出来的好处：四个图表都用同一套配色和坐标轴样式，
   以后改主题只改这一个文件。
   ============================================================ */

export const palette = ['#35d0ff', '#ffd15c', '#3ddc97', '#ff6b81', '#9b8cff', '#ff9f43']

export const axisLabel = {
  color: '#7b91b4',
  fontSize: 11,
}

export const splitLine = {
  lineStyle: { color: 'rgba(123, 145, 180, 0.14)' },
}

export const tooltip = {
  backgroundColor: 'rgba(6, 13, 31, 0.94)',
  borderColor: 'rgba(53, 208, 255, 0.35)',
  borderWidth: 1,
  textStyle: { color: '#d7e3f4', fontSize: 12 },
  extraCssText: 'backdrop-filter: blur(4px); border-radius: 8px;',
}

/** 生成从上到下渐隐的填充色，用于折线图 areaStyle */
export function fadeDown(rgb, from = 0.35, to = 0.02) {
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      { offset: 0, color: `rgba(${rgb}, ${from})` },
      { offset: 1, color: `rgba(${rgb}, ${to})` },
    ],
  }
}
