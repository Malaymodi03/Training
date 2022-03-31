var arr = []
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        arr.push(i)
        arr.pop()
    }
}
console.table(arr);