import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_repertorio_music', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });

  export default sequelize;