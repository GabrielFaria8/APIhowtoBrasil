import { DataSource } from 'typeorm';
import { INTERESSES } from './interesses.entity';

export const interessesProviders = [
  {
    provide: 'INTERESSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(INTERESSES),
    inject: ['DATA_SOURCE'],
  },
];