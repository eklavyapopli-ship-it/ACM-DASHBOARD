import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("collection"); 
    const usersCollection = db.collection("users"); 

    const data = await usersCollection.find({}).toArray(); 
    console.log("📦 Data fetched:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
