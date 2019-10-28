// 设置、删除本地存储数据
export function localStorage(item, data) {
  if (arguments.length === 1) {
    return window.localStorage.getItem(item)
  } else if (arguments.length === 2) {
    if (typeof data === 'object') {
      data = JSON.stringify(data)
    }
    window.localStorage.setItem(item, data)
  }
}

export function delStorage(item) {
  window.localStorage.removeItem(item)
}
