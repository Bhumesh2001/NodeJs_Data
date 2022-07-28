const fs = require('fs')
const axios = require('axios')
const prompt = require('prompt-sync')()
const info = async ()=>{
    try {
        const user_data = []
        let data = await axios('https://api.merakilearn.org/courses')
        for(let client_info of data.data){
            user_data.push(client_info.id)
            user_data.push(client_info.name)
        }
        function  data_call(){
            let count = 0
            for(let user_data of data.data){
            count+= 1
            console.log(`${count} :- id :- ${user_data.id} name :- ${user_data.name}`);
            }
            const id_name = prompt('Enter your id or name: ')
            if(user_data.includes(id_name)){
                for(let udata of data.data){
                    if(id_name == udata.id || id_name == udata.name){
                        console.log(udata);
                    }
                }
            }else{
                console.log("data not exist");
            }
        }
        if(!fs.existsSync('./package/data.json')){
            fs.writeFileSync("./package/data.json",JSON.stringify(data.data,null,4))
            data_call()
        }else{
            data_call()
        }
    } catch (error) {
        console.log('undefined comming from here');
        console.log('please check your connection\ntry again');
    }
}
info()
