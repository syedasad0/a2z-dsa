function insertionSort(arr) {
  
    for (let i = 1; i < arr.length; i++) { //i is initialized to 1 because we assume the element at index 0 is already sorted.
      let current = arr[i]; //current stores the current element we're working with, starting from index 1.
      console.log(`current element: ${current}`);
      let j = i - 1;
      console.log(`Outer Loop:::: i=${i} and j=${j}`)
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
        console.log(`arr inside while loop: ${arr}`)
      }
      console.log(`current element2: ${current}`);
      arr[j + 1] = current;
      console.log(`arr after: ${arr}`);

    }
  
    return arr;
  }
  
  // Example usage:
  const myArray = [23, 1, 10, 5, 2];
  const sortedArray = insertionSort(myArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 8]
  