import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User"

export default async function handler(req, res) {
    try {
        await dbConnect()
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required"})
        }

        const newUser = new User({ name, email, password })
        await newUser.save()

        res.status(201).json({ message:"User registered successfully!" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error:"Failed to register user"})
    }
}
