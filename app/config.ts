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
    entities: ["app/entity/**/*.ts", "entity/**/*.js"],
  },

  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
    from:process.env.MAIL_FROM
  },

  upload: {
    dir:process.env.UPLOAD_DIR,
    max:process.env.UPLOAD_SIZE,
  }
};