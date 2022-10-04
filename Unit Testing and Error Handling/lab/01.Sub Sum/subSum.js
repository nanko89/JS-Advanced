function subSum(arr, startIndex, endIndex) {
  if (!Array.isArray(arr)) {
    return NaN;
  }

  startIndex = Math.max(0, startIndex);
  endIndex = Math.min(arr.length - 1, endIndex);

  let sum = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    if (isNaN(arr[i])) {
      return NaN;
    }
    sum += arr[i];
  }

  return sum;
}

console.log(subSum([10, "twenty", 30, 40], 0, 2));
