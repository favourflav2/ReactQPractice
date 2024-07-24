import pool from "@/app/utils/dbConnect/dbConnect";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const data = await pool.query('SELECT * from toggle')
        //console.log(data.rows[0].showButton)
        return NextResponse.json(data.rows[0].showButton)

    }catch(e){
console.log(e)
    }
}

  function wait(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // const valueThatDeterminesError = getRandomArbitrary(1, 4);

  

export async function PUT(req: Request, res: NextResponse) {
  try {
    const res = await req.json()
    
    console.log("obj from frontend", res)
    const data = await pool.query("SELECT * from toggle");
    const boolVal = data.rows[0].showButton
    const newBool = await pool.query('UPDATE toggle SET "showButton" = $1 WHERE "id" = $2 RETURNING * ',[!boolVal, 1])
   
    return NextResponse.json(newBool.rows[0].showButton);
  } catch (e) {
    console.log(e);
    return NextResponse.json("There was an eror",{status:501})
  }
}
