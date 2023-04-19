// Write a function that takes an array of numbers as an argument 
// and logs the square of each number using a forEach loop.
let array=[4,3,6,5,7,3]
function square(array){
 array.forEach(e => {
    console.log(e*e)
 });   
}
square(array)
// Write a function that takes an array of strings as an 
// argument and logs each string in reverse using a forEach loop.
let arr=["Debora","Joan","Monicah","Irene"]
function string(arr) {
    arr.forEach(e=>{
         console.log(e.split("").reverse().join())
      })
    
}
string(arr)

// Write a function that takes an array of objects as an argument, 
// where each object has a 'name' property. Use a forEach loop to iterate
//  through the array and log the name of each object to the console.

function object(arr1){
arr1.forEach(obj=>{
    console.log(obj.name)

})
}
let arr1=[{name:'Lado'},{name:'Liz'},{name:'shiko'}]
object(arr1)



// Write a function that takes an array of numbers as an
//  argument and returns the sum of all the numbers using a forEach loop.
function returns(arra){
    sum = 0
    arra.forEach(Element=>{
        sum+=Element
      
    })
    console.log(sum);
}
let arra=[3,5,6,7,9]
returns(arra)
// Write function that take two arrays as input and returns a new array with.
//The element that are common to both arrays

function both(arr0,arr2){
    var result = [];
    arr0.forEach(elent=>{ 
      if (arr2.includes(elent)) {
        result.push(elent);
      }
    });
    return result;

}
let arr0=[1,2,4,4,5,6,6,7]
let arr2=[2,43,4,5,6,7]
console.log( both(arr0,arr2))

// Write a function that takes an array of strings as an argument and returns a new 
// array containing only the strings that are longer than 5 characters using a forEach loop.
let result =[]
function greater(array){
    array.forEach(character=>{
        if((character.length)>5){
        result.push(character)}

    })
    return result;
}
let character=["board","colors","vowels"]
 console.log(greater(character))


//  Write a function that takes an array of strings as an argument and logs 
// each string in uppercase using a forEach loop.

function string(ar){
    ar.forEach(str=>{
        console.log(str.toUpperCase())
    })
}
let ar=["bag","Rita"]
console.log(string(ar))

// Write a function that takes an array of objects as an argument, where each object has a 'age' 
// property. Use a forEach loop to iterate through the array and return the sum of all ages.
sum =0

function sumAge(arrr){
arrr.forEach(obj=>{
    sum+=obj.age
})
return sum
}
let arrr=[{name:'Peter',age:29},{name:'Brain',age:20}]
console.log("q1",sumAge(arrr))

// Write a function that takes an array of numbers as an argument and returns
//  a new array containing only the numbers that are divisible by 3 using a forEach loop.
let results =[]
function division(arrs){
    arrs.forEach(Number=>{
        if(Number%3===0){
            results.push(Number)

        }
    })
    return results
}
let arrs=[9,6,8,4,3]
console.log(division(arrs))


// Write a function that takes an array of strings as an argument and returns
//  a new array containing only the strings that start with the letter 'a' using
//   a forEach loop.
let empty=[]
var q="dd"

function letter(arrr){
    arrr.forEach(strings=>{
        if(strings.startsWith('a')){
             empty.push (strings)
        }
    })
    return empty

}
let arrrr=["aith","Laptop","book"]
console.log(letter(arrrr))


// Write a function that takes an array of objects as an argument, where each 
// object has a 'score' property. Use a forEach loop to iterate through the array
//  and return the average score.
let total=0

function scoreAverage(arr5){
    arr5.forEach(obj=>{
        (total+=obj.score)
               
    })
    return total/arr5.length
    

}

let arr5=[{score:40},{score:50},{score:70}]

console.log(scoreAverage(arr5))



