import { DataSource } from 'typeorm';
import { Files } from './files.entity';

export const filesProviders = [
  {
    provide: 'FILES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Files),
    inject: ['DATA_SOURCE'],
  },
];