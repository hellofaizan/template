import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export async function query(q, values) {
    const client = await pool.connect();
    try {
        const result = await client.query(q, values);
        return result.rows;
    } finally {
        client.release();
    }
}