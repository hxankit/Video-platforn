import mongoose from "mongoose"
export const connectdb = async () => {
    try {

        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to the database successfully!");
    } catch (error) {
        console.log("Error when connecting to DB", error.message)
    }
};