function factorialize(num){
    let nBefore = 0;
    let nAfter = 1;
    for (let n = 1; n<=num; n++) {
        nBefore = n;
        nAfter = nBefore *nAfter;
    }
    return (nAfter)
}
console.log(factorialize(5) )

