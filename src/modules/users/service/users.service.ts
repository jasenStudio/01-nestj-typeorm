import { Logger } from '@nestjs/common';

import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

export interface CreateUser {
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private userRepository;
  private logger = new Logger();
  //   inject the Datasource provider
  constructor(
    @Inject('USER_REPOSITORY')
    private __userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUser: CreateUser) {
    const user = this.__userRepository.create(createUser);
    return this.__userRepository.save(user);
  }
}
