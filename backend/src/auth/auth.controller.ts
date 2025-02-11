import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('signup')
    async signup(@Body('email') email:string, @Body('name') name: string, @Body('password') password: string){
        return this.authService.signup(email, name, password);
    }

    @Post('signin')
    @HttpCode(200)
    async login(@Body('email') email:string, @Body('password') password: string){
        return this.authService.login(email, password);
    }
}
