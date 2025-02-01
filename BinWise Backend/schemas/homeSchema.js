const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const homeSchema= new mongoose.Schema({
    name:{
        type:String,
        // minlength:[5,"Name should be minimum of 5 character long"],
        lowercase:true,
        trim:true,
        // maxlength:[20,"FirstName should be of max length 20"]
    },
      
    phone:{
        type:String,
       
        // maxlength:[10,"Mobile number should be 10 character long"],
        // minlength:[10,"Mobile number shoudl be 10 character long"]
    }   ,
    email:{
        type:String,
       
        // match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        // required:[true,"Password is a required field"],
    },
   address:{
    type: String
   },
    confirmpassword:{
        type:String
    }
    
},{timestamps:true})
homeSchema.pre('save',async function (){
    const hashedpassword= await bcrypt.hash(this.password,10);
    this.password=hashedpassword
});
const home= mongoose.model("home",homeSchema)
module.exports=home