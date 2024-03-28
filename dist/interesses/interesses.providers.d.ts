import { DataSource } from 'typeorm';
import { INTERESSES } from './interesses.entity';
export declare const interessesProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<INTERESSES>;
    inject: string[];
}[];
