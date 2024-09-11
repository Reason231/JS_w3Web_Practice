//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

// Increasing part of the pattern
for (let i = 1; i <= 5; i++) {
    let rows = "";
    for (let j = 1; j <= i; j++) {
        rows += " *";
    }
    console.log(rows);
}

// Decreasing part of the pattern
for (let k = 4; k >= 1; k--) {  // Start with 4 since 5 stars are already printed
    let rows = "";
    for (let l = 1; l <= k; l++) {
        rows += " *";
    }
    console.log(rows);
}
