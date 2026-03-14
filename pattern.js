let n=3;

for(let i = -n; i <= n; i++) {
    let row = "";
    for(let j = -n; j <= n; j++) {
    row += (Math.max(Math.abs(i), Math.abs(j)) + 1) + " ";
    }
    console.log(row);
}
