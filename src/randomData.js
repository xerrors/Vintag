export function randomData() {
  var randData = {}
  // 标题
  randData.title = '随机图表' + Math.floor((Math.random() * 90 + 10))
  // 图例
  randData.legend = []
  var legendLen = Math.floor((Math.random() * 3 + 2))
  for (var x = 1; x <= legendLen; x++) {
    randData.legend.push('数据' + x)
  }
  // 数据
  randData.data = []
  var dataLength = Math.floor((Math.random() * 5 + 4))
  for (var i = 0; i < randData.legend.length; i++) {
    var data = []
    for (var j = 0; j < dataLength; j++) {
      data.unshift(Math.floor((Math.random() * 100 + 50)))
    }
    randData.data.push(data)
  }
  // 坐标轴数据
  randData.axis = {
    x: [],
    y: []
  }
  randData.axis.x = []
  for (var m = 1; m <= dataLength; m++) {
    randData.axis.x.push(m)
  }
  console.log(randData)
  return randData
}
