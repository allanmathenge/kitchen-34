
import connectToDatabase from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json()
        
        await connectToDatabase()
        // Check if the email exists in the database
        const userEmailExists = await User.findOne({ email })
        
        if (userEmailExists) {
            return new NextResponse(JSON.stringify({ message: "User already exists in the database"}), { status: 400})
        }

        // User email to be encrypted
        
        const newUser = new User({ name, email, password })

        await newUser.save()

        return new NextResponse(JSON.stringify({message:"User successfully registered"}), { status: 201 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"User registration failed"}), {status: 400})
    }
}
