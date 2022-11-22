const mongoose= require("mongoose")

// mongoose.connect("")
mongoose.connect("mongodb+srv://Mayur007:Mayur/17007@cluster0.ppjtgr2.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Sucessfully connected with Database")
})
.catch((error)=>{
    console.log(error)
})

const schema = mongoose.Schema
const userSchema= new schema({
    image:{type:String},
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String}
})
let InstaUser=mongoose.model("instaUser",userSchema)

module.exports=InstaUser