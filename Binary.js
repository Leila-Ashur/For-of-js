// Implement a binary search function that takes an array of integers and a target 
// integer as inputs, and returns true if the target exists in the array and 
// false otherwise.

function Binary(array,target) {
  let left=0
  let right=array.length-1 
  while (left<=right) {
    let midlle=Math.floor(left+right/2)
    if(array[midlle]===target)
    return true
    else if(array[midlle]<target){ 
    left=midlle+1
    }
    else{
        right=midlle-1
    }
    
    }
    
  return false
  
}
let array=[23,44,55,63,67,98]
let target=23;
console.log(Binary(array,target))


//  Implement a binary search function that takes a sorted array of integers
// returns the number of occurrences of the target in the array.and a target 
// integer as  inputs, and 
function binaryCount(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        count++;
  
        
        let i = mid - 1;
        while (i >= 0 && arr[i] === target) {
          count++;
          i--;
        }
  
        i = mid + 1;
        while (i < arr.length && arr[i] === target) {
          count++;
          i++;
        }
  
        return count;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return count;
  }
  let targett=22
  let arr=[3,45,6,7,8,9,12,16,19,22,22,45]
  console.log(binaryCount(arr,targett))
//   Implement a binary search function that takes a sorted array of integers
//  and a target integer as inputs, and returns the index of the first integer 
//  that is greater than or equal to the target integer.
function binaryIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let index = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] >= target) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return index;
  }
let arr1=[22,33,44,55,66,77]
let targettt=33
console.log(binaryIndex(targettt,arr1))
//   Implement a binary search function that takes a sorted array of objects 
// with a string "name" property and a target name, and returns the object with 
// the matching "name" property.

function binaryObject(arr, targetName) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid].name === targetName) {
        return arr[mid];
      } else if (arr[mid].name < targetName) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return null;
  }
  let targeet=7
  let arr3=[1,3,5,6,9]
  console.log(binaryObject(targeet,arr3))
 
  
  
  
  
  
  