const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"First Name is required"]
    },
    email:{
        type:String,
        require:[true,"Email is require"],
        unique:true,
        validate:validator.isEmail,
    },
    phone:{
        type:Number,
        require:[true,"phone number is required"]
    },
    password:{
        type:String,
        require:[true,"Password is required"]
    },
},
{timestamps:true}
);

// userSchema.pre('save',async function(){
//    const salt=await bcrypt.getSalt(10);
//    this.password=await bcrypt.hash(this.password,salt);
// })

module.exports=mongoose.model('ReidnaxUser',userSchema);