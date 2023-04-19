// Implement a merge sort function that takes an array of integers as input,
//  and returns the sorted array.

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let empty = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        empty.push(left.shift());
      } else {
        empty.push(right.shift());
      }
    }
  
    return[...empty,...left,...right]
  }
  let array=[3,7,5,6,8,2,9]
  console.log(mergeSort(array))
  
// Implement a merge sort function that takes an array of objects with 
// a numeric "value" property as input, and returns the sorted array of objects.
  function mergeSortObjects(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let  mid = Math.floor(arr.length / 2);
     let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    return mergeObjects(mergeSortObjects(left), mergeSortObjects(right));
  }
  
  function mergeObjects(left, right) {
    let result = [];
  
    while (left.length && right.length) {
      if (left[0].value < right[0].value) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return[...result,...left,...right]
  }
  let objects=[5,6,4,7,3,9]
   console.log(mergeSortObjects(objects))
// //   Implement a merge sort function that takes an array of strings as
// //    input, and returns the sorted array.
 function mergeSortStrings(arr) {
  if (arr.length <= 1) {
     return arr;
   }

  const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);

   return mergeStrings(mergeSortStrings(left), mergeSortStrings(right));
  
 }
 

 function mergeStrings(left, right) {
   let result = [];

   while (left.length && right.length) {
    if (left[0] < right[0]) {
       result.push(left.shift());
     } else {
       result.push(right.shift());
     }
   }

   return[...result,...left,...right]
 }
 let string=["leila","Ali","Racheal","Rita"]
 console.log(mergeSortStrings(string))

// //  Implement a merge sort function that takes an array of arrays of objects with
// //  a string "name" property as input, and returns a single sorted array of objects.
 function mergeSortArray(arr) {
     if (arr.length <= 1) {
       return arr[0];
    }
  
     const mid = Math.floor(arr.length / 2);
     const left = arr.slice(0, mid);
     const right = arr.slice(mid);
  
     return mergeArrays(mergeSortArray(left), mergeSortArray(right));
   }
  
  function mergeArrays(left, right) {
     let result = [];
     let i = 0;
     let j = 0;
  
     while (i < left.length && j < right.length) {
       if (left[i][0].name < right[j][0].name) {
         result.push(left[i]);
         i++;
       } else {
         result.push(right[j]);
         j++;
       }
     }
  
     return result.concat(left.slice(i)).concat(right.slice(j));
   }
   let object =["chair","jettle","Ink"]
  console.log(mergeArrays(object))
