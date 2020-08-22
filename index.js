const fs = require('fs') // stands for 'file system'

const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8")
console.log(textIn)
