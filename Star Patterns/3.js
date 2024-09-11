for (let i = 1; i <=5; i++) {
    let rows=""
    for (let j = 1; j <=i; j++) {
        rows=rows+" *"
    }
    console.log(rows)
}

for (let k = 1; k <=5; k++) {
    let rows=""
    for (let l = 4; l >= k; l--) {
        rows=rows + " *"
    }
    console.log(rows)
}