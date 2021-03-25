var majorityElement = function (nums) {
  let m = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!m.has(nums[i])) {
      m.set(nums[i], 1)
    } else {
      m.set(nums[i], m.get(nums[i]) + 1)
    }
    if (m.get(nums[i]) > nums.length / 2) return nums[i]
  }
}

majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2])
