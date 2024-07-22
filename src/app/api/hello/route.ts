const { Pool, types } = pg;
import pg from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});


export async function GET(req:Request,res:Response) {
    const data = await pool.query("SELECT * FROM fav")
  return  Response.json((data.rows))
}

export async function POST(req: Request, res: Response){
    try{
        
        const fav = await req.json()
        const {name,title} = fav
        console.log(fav)
        const res = await pool.query('INSERT INTO fav (name, title) VALUES ($1, $2) RETURNING *',[name, title])
        return Response.json(res.rows)
        
    }catch(e){
        console.log(e)
    }
}