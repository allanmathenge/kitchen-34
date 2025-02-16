import mongoose from "mongoose"
import { NextResponse } from "next/server"

const connectToDatabase = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to mongodb")

    } catch (error) {
        console.log("Error connecting to database")
        return new NextResponse(JSON.stringify({ message: "Error connecting to database"}), { status: 500 })
    }
}

export default connectToDatabase
