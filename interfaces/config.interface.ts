import { Dialect } from "sequelize/types";

interface DBConfigType {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

export { DBConfigType };