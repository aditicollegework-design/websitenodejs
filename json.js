const user={
rno:1001,
sname:'abcd',
class:'BCA',
marks:89
}
const ht=require("http")
const server=ht.createServer((req,res)=>{
if(req.url="/api/json"){
const data=JSON.stringify(user)
res.end(data)
}})
server.listen(1000,()=>{
    console.log("server is running at 1000")
})