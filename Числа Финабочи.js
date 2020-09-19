let array = [8, 1, 5, 6, 3, 7, 9, 2, 4];

function sort(arr) {
  for(let n = 0; n < arr.length; n++) {
      for(let i = 0; i < arr.length - 1 - n; i++) {
        if(arr[i] > arr[i + 1]) {
          const buff = array[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = buff
        }
      }
    }
    return arr;
  }
alert(sort(array));