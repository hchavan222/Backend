import { DataSource } from "typeorm";

export const AppDatasSource = new DataSource({
    type: 'sqlite',
    database: 'emp.db',
    synchronize: true,
    logging: true,
    entities: [Employee],
})