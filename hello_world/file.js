import fs from 'fs'
import os from 'os'
//...................................... node fs basics...........................................
//................................................................................................
//................................................................................................

//synchronous
// fs.writeFileSync("./test.txt", "hey there , added words")

//Asynchronous     note: callback is required in this call !!!
// fs.writeFile("./test.txt", "hello world 2", (err) => {})

// synchronous
// const readText = fs.readFileSync('./contacts.txt', "utf-8");
// console.log(readText);

// Asynchronous
// fs.readFile('./contacts.txt', 'utf-8', (err, readText) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(readText);
//     }
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toString())
// fs.appendFileSync("./test.txt", `Hey there appended \n`)
// fs.appendFileSync("./test.txt", `${Date.now()} hey there \n`)

// fs.cpSync('./test.txt', './copy.txt')

// fs.rmSync("./copy.txt")

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile());

// fs.mkdirSync("newDocs/a/b", {recursive: true})
// fs.mkdirSync("my-docs");
// fs.mkdirSync("new-docsss/a/b", { recursive: true })

// console.log(os.cpus().length);
