function isPronic(n){
    let bool = false
    for (let i = 0;i<=n;i++){
        if (i*(i + 1)==n) bool = true;
    }
    return bool
}
console.log(isPronic(8))