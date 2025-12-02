console.log("Hello World")

const fs = require('fs')
fs.writeFile("ooutput.txt", "writing file", (err) => {
    if(err) console.log("error occured");
    else console.log("file written succesfullly")
})