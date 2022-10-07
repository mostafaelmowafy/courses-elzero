let start = 1;
let end = 6;
let breaker = 2;

for(;start <= end ;start++){
    console.log(start)
    for(breaker=2 ;breaker < end; breaker+=2){
        console.log(`--${breaker}`)
        continue
    }
}
// Output
