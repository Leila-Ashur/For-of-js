// Write a for loop that iterates through an array of
//  numbers and adds 1 to each number.
let array=[1,2,3,4,5,6]
for (let n = 0; n< array.length; n++) {
    array[n]+=1
    

   
 }
console.log(array)

// // Write a for loop that iterates through an array of strings
// //  and concatenates them together into a single string.
 string=["chair","car","vehicle","board"]

 for (let str = 0; str < array.length; str++) {
      array[str];
    }
     console.log(string +(""))
     // Write a for loop that iterates through an array of objects and 
    // logs the value of a specific property for each object.
    // myarray=[leila,21]
    //  for (let o = 0; o < array.length; o++) {
    //       array[o];
        
    // }


    // Write a for loop that iterates through an array of
//     //  numbers and logs only the even numbers.
    array=[1,2,3,4,5,6,7,8,9]
   for (let e = 0; e < array.length; e++) {
       if (array[e]%2==0){

       console.log(array[e]);
        }
        }

     // Write a for loop that iterates through an array of 
     // numbers and logs only the odd numbers.
   array=[22,44,34,45,56,55,77,88,87]

    for (let numbers = 0; numbers < array.length; numbers++) {
         if(array[numbers]%2!==0){ 
        console.log(array[numbers]);
        }
        
     }

    //  Write a for loop that iterates through an array of numbers and logs whether each number 
    // is positive, negative, or zero.
    myarray=[0,1,2,3,4,5,6,7,8,9,9]

    for (let n = 0; n < array.length; n++) {
        if(myarray[n]<0){
            console.log(myarray[n]+ "is negative")

        }
       else if(myarray[n]>0){
        console.log(myarray[n]+ "is positive")

        }
        else{
            console.log(myarray[n]+ "zero")

        }
        console.log(myarray[n]) 
        
    }
    // Write a for loop that logs the numbers 1 to 10 to the console.

   for (let i = 1; i <= 10;i++) {
    
    console.log(i);
    
   }



    // Write a for loop that iterates through an array of numbers and logs the largest number.
    num=[1,4,3,6,7,5,3,43,56,]
    for (let l = 0; l < array.length; l++) {
        max =num
        if(num[l]>max){ 

        console.log( array[l] );
        
    }}
   console.log(max)

//    Write function that take two arrays as input and returns a new array with.
   //The element that are common to both arrays   

   function both(array1,array2) {
    for (let z = 0; z < array.length; z++) {
        consol.log(array1[z]);

        for (let q = 0; q < array.length; q++) {
            consol.log( array[q]);
            
        }
        
    }
    const empty=[]
    if(array1[z]===array2[q]){ 
    empty.push(array1[z])
    }
    return empty

    
   }
   let array1=[,3,4,3,3.4,5,6]
   let array2=[3,4,3,,6,7,5,4,3]
   var same= both(array1,array2)
   consol.log(same)





    