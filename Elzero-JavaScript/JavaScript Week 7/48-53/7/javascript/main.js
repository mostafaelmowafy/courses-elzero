let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(; ++start < mix.length; start){
    if(typeof mix[start]==="number"){
        console.log(mix[start])
    }
}
// Output
2
3
4