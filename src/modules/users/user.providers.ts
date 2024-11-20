import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { DATA_SOURCE } from 'src/common/constants';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
