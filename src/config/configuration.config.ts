import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  db: {
    host: process.env.DATABASE_MYSQL_HOST,
    port: parseInt(process.env.DATABASE_MYSQL_PORT, 10),
    username: process.env.DATABASE_MYSQL_USERNAME,
    password: process.env.DATABASE_MYSQL_PASSWORD,
    database: process.env.DATABASE_MYSQL_NAME,
  },
}));
