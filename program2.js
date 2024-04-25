function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  let i = 0;
  while (i < nums.length) {
      if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
          [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]; // Swap numbers
      } else {
          i++;
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  return nums.length + 1;

}

module.exports = smallestMissingPositiveInteger;
