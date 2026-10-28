const ht=require("http")
const fs=require("fs")
const ms=require("mysql2")
const conn=ms.createConnection({
    host:'localhost',
    user:'root',
    password:'Bca@1234',
    database:'apgc'
})
const server=ht.createServer((req,res)=>{
    if(req.url==="/form"){
res.writeHead(200,{'content-type':'text/html'})
const data=fs.readFileSync("form.html","utf8")
res.end(data)
} else if(req.url=="/submit"){
let body=""
req.on('data',(chunk)=>{
    body=body+chunk.toString()
})
req.on('end',()=>{
    console.log(body)
    const formdata=new URLSearchParams(body)
    console.log(formdata)
    const sname=formdata.get('sname')
    const rno =formdata.get('rno')
    const marks=formdata.get('marks')
    conn.connect((err)=>{
query=`insert into student values ("${rno}","${sname}","BCA","${marks}")`
console.log(query)
conn.query(query)
conn.end()
res.end("data submitted successfully")
    
    })
})
}

})
server.listen(1000,()=>{
    console.log("server is running at 1000 ")
})