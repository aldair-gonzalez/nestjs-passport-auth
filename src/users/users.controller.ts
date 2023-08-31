import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const { password } = createUserDto;
      createUserDto.password = await bcrypt.hash(password, 10);
      return await this.usersService.create(createUserDto);
    } catch (error) {
      if (error.name || error.sqlState)
        throw new BadRequestException(error.message);
      throw error;
    }
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':user_id')
  findOne(@Param('user_id') user_id: number) {
    try {
      return this.usersService.findOne({ user_id });
    } catch (error) {
      if (error.name || error.sqlState)
        throw new BadRequestException(error.message);
      throw error;
    }
  }

  @Patch(':user_id')
  async update(
    @Param('user_id') user_id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const user = await this.usersService.findOne({ user_id });
      if (!user) throw new BadRequestException('user not found');
      return await this.usersService.update(+user_id, updateUserDto);
    } catch (error) {
      if (error.name || error.sqlState)
        throw new BadRequestException(error.message);
      throw error;
    }
  }

  @Delete(':user_id')
  async remove(@Param('user_id') user_id: number) {
    try {
      if (isNaN(user_id))
        throw new BadRequestException('user_id should be a number');

      const user = await this.usersService.findOne({ user_id });
      if (!user) throw new BadRequestException('user not found');
      await this.usersService.remove(+user_id);
    } catch (error) {
      if (error.name || error.sqlState)
        throw new BadRequestException(error.message);
      throw error;
    }
  }
}
