// print odd nums starting from zero

let x = prompt("Enter a number diffferent from zero");

const writeNum = function() {
    for (i =0; i <= x; i++) {

        if (i %2 != 0)
         {
            console.log(i) ;      
         }
         else {};
    }
}
console.log(writeNum(x));
 