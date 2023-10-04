let nums = [2, 12, 11, 5, 10, 1, 99];
let newnums = nums.reduce(function(la ,lc){
    return (lc % 2 === 0) ? la * lc : la + lc 
},1);
console.log(newnums)
// 500