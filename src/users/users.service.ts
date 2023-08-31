import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    return await this.usersRepository.save(createUserDto);
  }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOne({
    user_id,
    email,
  }: {
    user_id?: number;
    email?: string;
  }): Promise<Users> {
    if (user_id)
      return await this.usersRepository.findOne({ where: { user_id } });
    if (email) return await this.usersRepository.findOne({ where: { email } });
    return null;
  }

  async update(
    user_id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.usersRepository.update(user_id, updateUserDto);
  }

  async remove(user_id: number): Promise<void> {
    await this.usersRepository.delete(user_id);
  }
}
