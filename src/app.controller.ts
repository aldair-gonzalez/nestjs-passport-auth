import { Controller, Post, Request, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  // @UseGuards(LocalAuthGuard)
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req: any) {
    console.log('Request');
    return await req.user;
  }
}
