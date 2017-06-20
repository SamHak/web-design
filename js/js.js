"use strict";
// number Fibonacci !!!
var k;
k = +prompt("enter number", "");
var a1 = 1;
var a2 = 1;
var fib = 1;
for(var i = 2; i < k; i++){
    fib = a1 + a2;
    a1 = a2;
    a2 = fib;
}
document.write("<br>" + fib);

// 2th method 
var n;
n = +prompt("enter number", "");
function fibonacci(n){
    if(n == 1 || n == 0){
        return n;
    }else{
        return n = fibonacci(n - 1) + fibonacci(n - 2);
    }
}
document.write(fibonacci(n));

