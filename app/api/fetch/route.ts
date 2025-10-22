import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("collection"); // 👈 your database name
    const usersCollection = db.collection("users"); // 👈 your collection name

    const data = await usersCollection.find({}).toArray(); // fetch all docs
    console.log("📦 Data fetched:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
