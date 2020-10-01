export const config = {
  system: {
    port: process.env.PORT || 3030,
  },

  database: {
    type: "mysql",
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASS || 'pass',
    database: process.env.DATABASE_NAME || 'my_db',
    synchronize: process.env.DATABASE_SYNC === "true",
    logging: process.env.DATABASE_LOG == "true",
    entities: ["src/entity/**/*.ts", "entity/**/*.js"],
    migrations: ["src/migration/**/*.ts", "migration/**/*.js"],
    subscribers: ["src/subscriber/**/*.ts", "subscriber/**/*.js"],
  },

};