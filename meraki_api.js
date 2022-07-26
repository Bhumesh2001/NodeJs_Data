const fs = require('fs')
const axios = require('axios')
const prompt = require('prompt-sync')()
const info = async ()=>{
    try {
        if(!fs.existsSync('./package/data.json')){
            let data = await axios('https://api.merakilearn.org/courses')
            fs.writeFileSync("./package/data.json",JSON.stringify(data.data,null,4))
            let count = 0
            for(let user_data of data.data){
            count+= 1
            console.log(`${count} :- id :- ${user_data.id} name :- ${user_data.name}`);
            }
            const id_name = prompt('Enter your id or name: ')
            for(let udata of data.data){
                if(id_name == udata.id || id_name == udata.name){
                    console.log(udata);
                }
            }
        }
    } catch (error) {
        console.log(error.messege);
    }
}
info()