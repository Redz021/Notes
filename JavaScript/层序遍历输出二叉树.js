function levelOrder(root) {
  if (!root) return []
  const queue = [root] //节点队列
  const res = [] //遍历结果
  let level = 0 //当前层数
  while (queue.length) {
    res[level] = [] //当前层遍历结果
    let levelNum = queue.length //当前层节点数量
    while (levelNum--) {
      const front = queue.shift() //取出当前层第一个节点
      res[level].push(front.val) //将节点加入当前层遍历结果中
      front.left && queue.push(front.left)
      front.right && queue.push(front.right)
    }
    level++
  }
  return res
}
