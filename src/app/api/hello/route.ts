const { Pool, types } = pg;
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import pg from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

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
