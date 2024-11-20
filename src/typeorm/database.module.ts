import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Global() // makes the module available globally for other modules once imported in the app modules
@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
