interface SquareConfig {
  size?: number;
  width?: number;
}

function getAreaSize(config: SquareConfig): { area: number, width: number } {
  let areaSize = { area: 20, width: 100 };
  if (config.size) {
    areaSize.area = config.size;
  }
  if (config.width) {
    areaSize.width = config.width;
  }
  return areaSize;
}

// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。 
// 比如，我们故意将 createSquare里的color属性名拼错，就会得到一个错误提示：
getAreaSize({ size: 30, width: 399 })
// getAreaSize({ color: 30, width: 399 })