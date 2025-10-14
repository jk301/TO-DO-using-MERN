import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("DB connected.")
    } catch (error) {
        console.error("Error connecting to DB.", error)
        process.exit(1) //failure exit
    }
}