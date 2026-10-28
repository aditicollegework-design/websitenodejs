const mongo=require("mongoose")
console.log("1 to insert data")
console.log("2 to read data")
console.log("3 to Update data")
console.log("4 to Delete data")
const ch=Number(process.argv[2])
mongo.connect("mongodb://localhost:27017/arya")
.then(()=>{
    console.log("database connected")
    //structure create
    const studentSchema=new mongo.Schema({
        rno:Number,
        sname:String,
        marks:Number
    });
    //model create
    const Student=mongo.model('Student',studentSchema)
    switch(ch){
        case 1:
    const ns= new Student({rno:Number(process.argv[3]),
        sname:process.argv[4],
        marks:Number(process.argv[5])})
    ns.save()
    .then((s)=>{
       console.log("student Inserted",s) 
    })
    mongo.disconnect()
        break;
        case 2:
        Student.find()
        .then((data)=>{
            console.log("All student Data",data)
        })
          mongo.disconnect()
        break;

        case 3:
            Student.updateMany({rno:Number(process.argv[3])},{$set:{marks:Number(process.argv[4])}})
            .then((data1)=>{
                console.log("student Updated",data1)
            })
  mongo.disconnect()
  break;
              case 4:
            Student.deleteMany({rno:Number(process.argv[3])})
            .then((data1)=>{
                console.log("student deleted",data1)
            })
              mongo.disconnect()
            break;
            default:
            console.log("wrong Choice")
            break;
    }  
    })
.catch((err)=>{
    console.error(err)
})