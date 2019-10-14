// Linear Search function
function search(array, item) {
  let index = null; // 1

  for (let i = 0; i < array.length; i++) { // 1, n+1, n
    if (item === array[i]) { // n
      index = i;
      break;
    }
  }

  return index; // 1
  // 3n + 4
}


//  Binary Search function
function search(array, item) {
  let min = 0;
  let max = array.length - 1;


  while(true) {
    const middleIndex = Math.floor((min + max) / 2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) { 
      // Found it
      return middleIndex

    } else if (currentItem < item) {
      // Look at the right side
      min = middleIndex + 1;

    } else {
      // Look at the left side (usually when both are the same #)
      max = middleIndex - 1;
      }

    if (min > max) {
      return null;
    }
  }
}

