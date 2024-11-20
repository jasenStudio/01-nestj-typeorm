import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_MYSQL_HOST,
  port: parseInt(process.env.DATABASE_MYSQL_PORT, 10),
  username: process.env.DATABASE_MYSQL_USERNAME,
  password: process.env.DATABASE_MYSQL_PASSWORD,
  database: process.env.DATABASE_MYSQL_NAME,
  logging: 'all',
  entities: ['./src/**/*.entity.ts'],
  migrations: ['./database/migrations/*-migration.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      `Error during Data Source initialization`,
      JSON.stringify(err),
    );
  })
  .finally(() => {
    console.log('finished');
  });
