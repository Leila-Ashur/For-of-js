//Write a for...of loop that iterates over an array of numbers and logs each number to the console.
let num=[10,20,3,8,7,9,12];
for(let x of num){
    console.log(x);
}
//Create an array of strings and use a for...of loop
//to concatenate all the strings into a single sentence.
let strings=["Leila","ray","rachel","rakkem","roro"];
let sentence=''
for (let string of strings) {
    sentence+=string+' ';
}
console.log(sentence)
//Write a for...of loop that iterates over a string and logs each character to the console.
function string2(string1) {
    for (let string of string1) {
        console.log(string);
    }
}
let string1="Leila";
string2(string1);
//Create an object with key-value pairs representing items in a shopping cart. Use a for...of loop
//to calculate the total price of all items in the cart.
let shopping = {
    milk:100,
    eggs:50,
    fish:300,
    flour:200
  };
  let total = 0;
for (const item in shopping) {
  total += shopping[item];
}
console.log(`The total price of all items in the cart is $${total.toFixed(2)}.`);
//to fixed method rounds of the answer to 2 decimal places
//Write a for...of loop that iterates over an array of objects representing books,
//and logs the title and author of each book to the console.
function book(array) {
    for (let arr of array) {
       console.log(`${arr.title} by ${arr.author}`);
    }
}
let books =[ {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    published: 1979
  },
  {
    title:'leilas memoir',
    author:'leila',
    published:2030
  },
]
book(books);