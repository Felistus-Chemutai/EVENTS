const http = require('http');
const fs = require('fs');



const server =http.createServer((req, res)=>{
const home = fs.readFileSync('./index.html','utf8')
console.log(home)
if(req.url === '/'){
res.write(home)
}
const signup = fs.readFileSync('./index.html','utf8')
if(req.url === 'signup'){
res.write(signup)
}
res.end()
})
server.listen(3000)//
