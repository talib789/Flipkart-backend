import mongoose from "mongoose";

export const Connection=async(USERNAME,PASSWORD)=>{

    const url=`mongodb://localhost:27017/flipkart-clone`;

    try {
        await mongoose.connect(url,{useUnifiedTopology:true});
        console.log(`Database Connected`);
    } catch (err) {
        console.log(`Error while connecting to the database`,err);
    }
}