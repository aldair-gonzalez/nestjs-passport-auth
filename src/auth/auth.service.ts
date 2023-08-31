import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne({ email });
    const validate = await bcrypt.compare(password, user.password);
    if (!validate) throw new UnauthorizedException();
    const payload = { sub: user.user_id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
