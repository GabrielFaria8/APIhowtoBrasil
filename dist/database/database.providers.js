"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: '50.116.112.16',
                port: 3306,
                username: 'vitali04_howtobrasil',
                password: 'brasil2306',
                database: 'vitali04_howtobrasil',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
                connectTimeout: 20000,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map