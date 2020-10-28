// 1. Create a loop that logs the numbers from 0-99 (ascending)
for (let k = 0 ; k < 100 ; k++) {
    console.log(k); 
}

// 2. Create a loop that logs the numbers from 99-0 (descending)
for (let k = 99 ; k >= 0 ; k--) {
    console.log(k); 
}

// 3. Create a loop that logs the EVEN numbers from 0-98 (ascending)
for (let k = 0; k < 99; k += 2 ) {
    console.log(k); 
}

// 4. Create a loop that logs the EVEN numbers from 98-0 (descending)
for (let k = 98 ; k >= 0 ; k -= 2) {
    console.log(k); 
}

// 5. Create a loop that logs the ODD numbers from 0-99 (ascending)
for (let k = 0 ; k <= 99 ; k++) {
    if (k % 2 !== 0) {
        console.log(k); 
    }
}