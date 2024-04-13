import { DataSource } from 'typeorm';
import { Files } from './files.entity';
export declare const filesProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Files>;
    inject: string[];
}[];
