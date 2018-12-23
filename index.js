// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var count = 0;
    if(A && A.length <= 100000 && A.length>= 0){
        A.map(a=>{
            if( a === 1 || a === 0){
               count = a ===1 ? count+1: count; 
            
            } else {
                return -1;     
            }
        });
    } else {
        return -1;
    }
    return count;
}
