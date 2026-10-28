const ht=require("http")
const fs=require("fs")
const server=ht.createServer((req,res)=>{
    if(req.url==="/about.html"){
res.writeHead(200,{'content-type':'text/html'})
const data=fs.readFileSync("about.html","utf8")
res.end(data)
}
else     if(req.url==="/contact.html"){
res.writeHead(200,{'content-type':'text/html'})
const data=fs.readFileSync("contact.html","utf8")
res.end(data)
}

else     if(req.url==="/product.html"){
res.writeHead(200,{'content-type':'text/html'})
const data=fs.readFileSync("product.html","utf8")
res.end(data)
}
})
server.listen(1000,()=>{
    console.log("server is running at 1000 ")
})