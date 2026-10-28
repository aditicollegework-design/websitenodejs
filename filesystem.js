const fs=require("fs")
console.log("press 1 for reading file")
console.log("press 2 for writing file")
console.log("press 3 for appending file")
console.log("press 4 for renaming file")
console.log("press 5 for deleting file")
console.log("press 6 for creating directory")
const ch=Number(process.argv[2])
switch(ch){
case 1:
fs.readFile("f1.txt","utf8",(err,data)=>{
if(err){
    console.error(err)
}
else{
    console.log(data)
}
})
break;
case 2:
 fs.writeFile("f1.txt","This a file created by node js using File system",(err,data)=>{
if(err){
    console.error(err)
}
else{
    console.log("File Created!!")
}
})   
break;
case 3:
 fs.appendFile("f1.txt","\n New line appended by appendFile function",(err,data)=>{
if(err){
    console.error(err)
}
else{
    console.log("File appended!!")
}
})   
break;
case 4:
 fs.rename("f1.txt","newfile.txt",(err,data)=>{
if(err){
    console.error(err)
}
else{
    console.log("File Renamed!!")
}
})   
break;
case 5:
 fs.unlink("newfile.txt",(err)=>{
if(err){
    console.error(err)
}
else{
    console.log("File deleted!!")
}
})   
break;
case 6:
 fs.mkdir("d1",(err)=>{
if(err){
    console.error(err)
}
else{
    console.log("Directory Created!!")
}
})   
break;
}