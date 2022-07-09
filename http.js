
// we can create a server a http module.

// 1. http module

//  1. create server 

// const http = require('http')


// const server2 = http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/plain')
//     res.write('server created \n')
//     res.end('responce from the server')
// });
// const port = 8080;
// const host = 'localhost'

// server2.listen(port ,host,()=>{
//     console.log('server runniing at http://localhost:8080');
// });



// const server2 = http.createServer((req,res)=>{
//     if(req.url != '/favicon.ico'){
//         console.log(req.url);
//     }
//     console.log(req.method)
//     res.writeHead(202,'good',{'Content-Type':'text/plain'})
//     res.write('This server is good\n')
//     res.end('responce from the server')
// });
// const port = 8080;
// const host = 'localhost'

// server2.listen(port ,host,()=>{
//     console.log('server runniing at http://localhost:8080');
// });


// 2. url module

// 2. create url 

// 1 way

// const url = new URL('http://localhost:8080/default.htm?year=2017&month=february')

// console.log('hash:-',url.hash);
// console.log('host:-',url.host);
// console.log('host name:-',url.hostname);
// console.log('port:-',url.port);
// console.log('protocal:-',url.protocol);
// console.log('search query:-',url.search);
// console.log(`url searchparms:- ${url.searchParams}`);
// console.log(`pathaname:-${url.pathname}`);
// console.log(url.href);
// console.log(url.toString());
// console.log(url.toJSON());


// 2 way


// const url = require('url')

// let url1 = 'http://localhost:8080/default.htm?year=2017&month=february';

// let parse = url.parse(url1,'true')

// console.log('hash:-',parse.hash);
// console.log('host:-',parse.host);
// console.log('host name:-',parse.hostname);
// console.log('port:-',parse.port);
// console.log('protocal:-',parse.protocol);
// console.log('search query:-',parse.search);
// console.log(`url searchparms:- ${parse.searchParams}`);
// console.log(`pathaname:-${parse.pathname}`);
// console.log(parse.href);
// console.log(parse.toString());
// console.log(parse.toJSON());


// 3 . event module


// const events = require('events')
// let eventemitter = new events.EventEmitter()


// type 1


// // Ragister event listener

// // on() method

// eventemitter.on('bhumesh',(data)=>{
//     console.log('This is event module.');
//     console.log(`${data}`);
// });

// // trigger event

// eventemitter.emit('bhumesh','my name is lakhan')
// eventemitter.emit('bhumesh','my name is lakhan')


// // once()methods

// eventemitter.once('bhumesh',(data)=>{
//     console.log('This is event module.');
//     // console.log(`${data}`);
// });

// // trigger event

// eventemitter.emit('bhumesh','my name is lakhan')


// type 2

// class eventemitter1 extends events{}

// const event_obj = new eventemitter1()

// // on() method

// event_obj.on('event',()=>{
//     console.log('we are doing events module..');
// });

// event_obj.emit('event')
// event_obj.emit('event')


// // once() method

// event_obj.once('event',()=>{
//     console.log('we are doing events module..');
// });

// event_obj.emit('event')
// event_obj.emit('event')



// const event = require('events')

// const object = new event()

// object.on('vishal',(name)=>{
//     console.log('This event module');
//     console.log(`${name}`);
// })

// object.emit('vishal','bhumesh kewat')



// 4. os module


// const os = require('os')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.freemem());
// console.log(os.totalmem());


//5. DNS (domain name system)


// const dns = require('dns')

// // return ip addresses  website and host

// dns.lookup('filmyzilla.com',(error,data)=>{
//     if(error) throw error;
//     console.log(data);
// });

// // return ascoiated ip near the website and host

// dns.resolve('filmyzilla.com',(error,ip)=>{
//     if(error) throw error;
//     console.log(ip);
// })
