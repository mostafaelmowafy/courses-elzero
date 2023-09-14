for(let x=0; x<100000; x++){
    console.log(x)
}
let duration = parseInt(performance.now())
console.log(`Loop Took ${duration} Milliseconds`)
// Needed Output

// "Loop Took 1921 Milliseconds."