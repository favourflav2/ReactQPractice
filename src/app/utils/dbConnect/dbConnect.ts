import {Pool} from 'pg'

const pool = new Pool({
    connectionString: process.env.POSTGRES_URI
})

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});