import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

// const config: SqliteConnectionOptions = {
//     type: 'sqlite',
//     database: 'hinest',
//     entities: ['dist/src/**/*.entity.js'],
//     synchronize: true
// }
// entities: [__dirname + '/../**/', '*.entity.{ts,js}'],

const config = {
    type: 'mysql', //Database 설정
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hinest',
    entities: ['dist/**/*.entity.{ts,js}'], // Entity 연결
    synchronize: true,
};

export default config;