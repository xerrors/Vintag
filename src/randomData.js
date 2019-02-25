export function randomData(le, da) {
  var randData = {}
  // 标题
  // 随机化生成图表标题
  randData.title = '随机图表' + Math.floor((Math.random() * 90 + 10))
  // 图例
  // 随机化生成图例个数
  randData.legend = []
  randData.legendLen = Math.floor((Math.random() * 3 + le))
  for (var x = 1; x <= randData.legendLen; x++) {
    randData.legend.push('数据' + x)
  }
  // 数据
  // 随机化生成数据个数以及数据
  randData.data = []
  randData.dataLength = Math.floor((Math.random() * 5 + da))
  for (var i = 0; i < randData.legendLen; i++) {
    var data = []
    for (var j = 0; j < randData.dataLength; j++) {
      data.unshift(Math.floor((Math.random() * 100 + 50)))
    }
    randData.data.push(data)
  }
  // 坐标轴数据
  randData.axis = {
    x: [],
    y: []
  }
  // 按照顺序生成X坐标
  randData.axis.x = []
  for (var m = 1; m <= randData.dataLength; m++) {
    randData.axis.x.push(m)
  }
  console.log(randData)
  return randData
}
