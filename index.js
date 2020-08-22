const fs = require('fs') // stands for 'file system'

const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8")
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`

fs.writeFileSync('./starter/txt/output.txt', textOut)
console.log('File writen!')
