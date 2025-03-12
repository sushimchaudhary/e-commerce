//connect mongo db
const mongoose = require('mongoose');
const dotenv = require('dotenv')


const dbConnect = async ()=>{
    try {
        const res = await mongoose.connect(process.env.MONGODB_CONNECTION_URI);

    if(res)
         console.log("db connection success")
    } catch(err){
        console.error(err)
    }
    
}

module.exports = dbConnect;

