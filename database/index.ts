import {Sequelize} from "sequelize-typescript";
import  config  from "config";
import { DBConfigType } from "../interfaces/config.interface";
const dbConfig:DBConfigType = config.get('database');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
   host: dbConfig.host,
   dialect: dbConfig.dialect,
   models: [__dirname + '/models'] 
});

export default sequelize;