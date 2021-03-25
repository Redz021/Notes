function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

function reConstructBinaryTree(pre, vin) {
  if (!pre.length) {
    return null
  }

  let rootVal = pre[0]
  if (pre.length == 1) {
    return new TreeNode(rootVal)
  }
  let root = new TreeNode(rootVal)
  let rootIndex = -1
  for (let i = 0; i < vin.length; i++) {
    if (rootVal == vin[i]) {
      rootIndex = i
      break
    }
  }
  root.left = reConstructBinaryTree(
    pre.slice(1, rootIndex + 1),
    vin.slice(0, rootIndex)
  )
  root.right = reConstructBinaryTree(
    pre.slice(rootIndex + 1, pre.length),
    vin.slice(rootIndex + 1, vin.length)
  )
  return root
}
