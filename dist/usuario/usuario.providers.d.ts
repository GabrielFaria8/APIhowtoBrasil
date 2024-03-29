import { DataSource } from 'typeorm';
import { USUARIO } from './usuario.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<USUARIO>;
    inject: string[];
}[];
