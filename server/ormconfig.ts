require('dotenv/config');

module.exports = [
  {
    type: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/database/migrations',
    },
  },
];
