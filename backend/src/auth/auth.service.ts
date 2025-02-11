import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService,
    ){
    }
    async signup( email:string, name: string, password: string){
        const exisitngUser  = await this.userService.findUserByEmail(email);
        if(exisitngUser){
            throw new BadRequestException('User Already Exist');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        return this.userService.createUser(email, name, hashedPassword);
    }

    async login(email: string, password: string){
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new NotFoundException('User does not exist');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        return {
            access_token: this.jwtService.sign({ email: user.email, sub: user.email }),
          };
    }
}
