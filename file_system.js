
// const fs = require('fs')

//  node js

// file  system 

// 1. promises api(try catch and await use hoga)

// 2. callback api (asynchronously bol sakte hai)

// 3. sync api (synchronously hoga work)


// 2. promises api (asyncronously)


// 3.callback api

// 1 .make directory/folder in callback api


// fs.mkdir('./node.js/info',(error)=>{
//     if(error) throw error;
//     console.log('your directory created....')
// })

// 2. read directory 

// fs.readdir('./node.js/info',(error,data)=>{
//     if(error) throw error;
//     for(let info1 of data){
//         console.log(info1);
//     }
// })

// 3. remove directory

// fs.rmdir('./node.js/info',(error)=>{
//     if(error) throw error;
//     console.log("sucessfully removed");
// })


// 3. @@@@ synchronously api @@@@@

// ## create directory ##

// fs.mkdirSync('./node.js/info/js_data.txt')

// fs.mkdirSync('./node.js/info/data/fold1/lastdata',{recursive:true})
// console.log('folder created sucessfully.....')


// ## read directory ##

// const data = fs.readdirSync('./node.js/info')
// for(let info of data){
//     console.log(info)
// }


//  ## remove directery ##

// fs.rmdirSync('./node.js/info')
// console.log('sucessfully removed.....')



// ## creating a new file node js ##

// fs.writeFileSync('data.txt','I am doing node js')
        

//##  append a data  in file ##

// fs.appendFileSync('data.txt','And i am doing deeply study in node js')

// ## file read  ##

// const info = fs.readFileSync('data.txt')
// console.log(info.toString())


// // ## update file ##

// const info1 = fs.readFileSync('data.txt')
// let update = info1.toString()
// let update1 = 'I am doing node js '
// update = update1
// console.log(update)

// // let open2 = fs.appendFileSync('data.txt')

// fs.writeFileSync('data.txt',update)
// console.log('sucessfully updated........')


// //##  rename file ##
// fs.renameSync('data.txt','info.txt')

// // delete file 

// const delete_data = fs.unlinkSync('info.txt')
// console.log(delete_data)
