import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { Items } from "../../../lib/models/user";

export async function GET() {
  
try {
    await mongoose.connect(process.env.MONGODB_URI!)
     console.log("connected")
  
   const data = await  Items.find({});
    console.log(data)

      return NextResponse.json(data)
} catch (error) {
    console.log(error)
}

   


  
}