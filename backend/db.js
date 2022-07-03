const mongoose= require('mongoose');
// require("dotenv").config();
const mongoURI= 'mongodb://localhost:27017/swachbin';

const connectToMongo = () =>
{
    mongoose.connect(mongoURI, ()=>{
        console.log('successfully connected to mongoDB')
    })
}

module.exports= connectToMongo;