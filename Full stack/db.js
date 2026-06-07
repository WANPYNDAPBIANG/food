const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
    ssl: {
        rejectUnauthorized: true // Matches --ssl-verify-server-cert
    }
});

module.exports = {
    query: async (text, params) => {
        let conn;
        try {
            conn = await pool.getConnection();
            const res = await conn.query(text, params);
            return res;
        } catch (err) {
            console.error('Database query error:', err);
            throw err;
        } finally {
            if (conn) conn.release();
        }
    }
};
