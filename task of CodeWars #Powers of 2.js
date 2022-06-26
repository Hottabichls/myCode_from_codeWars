//task of CodeWars #Powers of 2
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let a = [];
    for (let i = n; i >= 0; i--){
        a.unshift(Math.pow(2, i))
        //debugger
    };
    return a
};
powersOfTwo(3)

//All Test is ok