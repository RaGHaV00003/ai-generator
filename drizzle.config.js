/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url :'postgresql://Ai_owner:5XeoHVIiw6BK@ep-green-river-a1ws7i1c.ap-southeast-1.aws.neon.tech/Ai?sslmode=require'
       
    }
  };