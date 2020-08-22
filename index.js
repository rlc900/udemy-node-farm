const fs = require('fs') // stands for 'file system'

// SYNCHRONOUS/BLOCKING
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8")
// console.log(textIn);
//
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
//
// fs.writeFileSync('./starter/txt/output.txt', textOut)
// console.log('File written!')

// ASYNC/NON-BLOCKING

fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {

  fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log('LINE 16', data2)
    fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
      console.log('LINE 18', data3)

      fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`,'utf-8', (err) => {
        console.log('LINE 21', 'File has been written! 👻')
      })
    })
  })
})
console.log('I will print first!')
