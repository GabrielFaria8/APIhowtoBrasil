import { DataSource } from 'typeorm';
 
export const databaseProviders = [
{
    provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: '50.116.112.16',
                port: 3306,
                username: 'vitali04_howtobrasil',
                password: 'brasil2306',
                database: 'vitali04_howtobrasil',
                entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
 
                connectTimeout: 20000, // Tempo limite de 15 segundos (em milissegundos)
            });
            return dataSource.initialize();
        },
    },
];