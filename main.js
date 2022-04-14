// Closures 
// Advantages
// Data hiding, encapsulation
function outer(b){
    let a = 10;
    function inner(){
        console.log(a, b);
    }
    return inner;
}

var close = outer("Hello World")
close();


function outest(){ 
    let c = 20;
    function outer(b){
        let a = 10;
        function inner(){
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
}
var close = outest()("Hello World")
close();

//
console.log(2 + '2"); // convert 1st one to string and concat them
console.log(2 - '2'); // - is only no opertator, converts string into no

// Remove duplicates
let nums = [1, 2, 2, 3];

console.log(new Set(nums)); // Converts into set
console.log([...new Set(nums)]); // Convets set into array

//IFFE
let func = function(){
    if(true){
        var a = 10;
        let b =  20;
    }
    console.log(a);
    console.log(b);
}
func();
// Without changing var keyword have a not accessible outside.

let func = function(){
    if(true){
        (function(){
         var a = 10;
         let b =  20; 
        })();
    }
    console.log(a);
    console.log(b);
}
func();


//
console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false

// Prevent user to adding new properties
let profile = {
    name: 'Alex'
};
Object.freeze(profile);
profile.age = 20;
console.log(profile);
// Prevent user to adding new properties and allow user to modify existing property
let profile = {
    name: 'Alex'
};
Object.seal(profile);
profile.age = 20;
profile.name = 'Alen';
console.log(profile);





