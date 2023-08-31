import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('AuthService Validate user');
    const user = await this.usersService.findOne({ email });
    const validate = await bcrypt.compare(password, user.password);
    if (user && validate) {
      const { password, ...result } = user;
      console.log(password);
      return result;
    }
    return null;
  }
}
