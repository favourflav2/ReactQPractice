import pool from "@/app/utils/dbConnect/dbConnect";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET() {
    const data = await pool.query("SELECT * FROM fav")
   return NextResponse.json(data.rows)
}





export async function POST(req: Request, res: NextResponse) {
  try {

    const fav = await req.json()
  
    const {name,title} = fav
    const res = await pool.query('INSERT INTO fav (name, title) VALUES ($1, $2) RETURNING *',[name, title])
    return NextResponse.json(res.rows[0])
  } catch (e) {
    console.log(e);
  }
}
