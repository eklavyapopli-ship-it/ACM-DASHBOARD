
import * as fs from 'fs/promises';
import { NextResponse } from 'next/server';
export async function GET(){

 const data = await fs.readFile("blog/data.json",'utf-8');
    const JSONdata=JSON.parse(data);

    return NextResponse.json(JSONdata.students);
    
}