//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
var min = function(list){
    let a = Math.min.apply(null,list)
    return a;
};
var max = function(list){

    let a = Math.max.apply(null,list)
    return a;
};

let b  = [4,6,2,1,9,63,-134,566];
min(b);
max(b);


//All Test is ok