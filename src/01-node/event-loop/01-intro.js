console.log("First task")
console.time()
for (let i = 0; i < 10000000; i++) {

}
console.timeEnd()
console.log("Next task")


console.log("First task")
setTimeout(() => {
    console.log("Second task")
}, 0)
console.log("Next task")