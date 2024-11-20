import { DataSource } from 'typeorm';
import config from '../config/configuration.config';
import { ConfigType } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [config.KEY],
    useFactory: async (configService: ConfigType<typeof config>) => {
      console.log(configService);
      const { host, port, username, password, database } = configService.db;
      const dataSource = new DataSource({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        // entities: [__dirname.replace('/typeorm', '') + '/**/*.entity{.ts,.js}'],
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
