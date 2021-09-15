// Your code here
// Map
function mapToNegativize(array) {
  let newArray = [];
  for (const value of array) {
    newArray.push(value * -1);
  }
  return newArray;
}

function mapToNoChange(array) {
  let newArray = [];
  for (const value of array) {
    newArray.push(value);
  }
  return newArray;
}

function mapToDouble(array) {
  let newArray = [];
  for (const value of array) {
    newArray.push(value * 2);
  }
  return newArray;
}

function mapToSquare(array) {
  let newArray = [];
  for (const value of array) {
    newArray.push(value ** 2);
  }
  return newArray;
}

// Reduce
function reduceToTotal(array, start = 0) {
  let memo = start;
  for (const value of array) {
    memo += value;
  }
  return memo;
}

function reduceToAllTrue(array) {
  let memo = [];
  for (const value of array) {
    if (!!value === true) {
      memo.push(value);
    }
  }
  if (memo.length === array.length) {
    return true;
  } else {
    return false;
  }
}

function reduceToAnyTrue(array) {
  let memo = [];
  for (const value of array) {
    if (!!value === true) {
      memo.push(value);
    }
  }
  if (memo.length > 0) {
    return true;
  } else {
    return false;
  }
}
