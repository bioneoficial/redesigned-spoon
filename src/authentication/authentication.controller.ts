import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('authentication')
export class AuthenticationController {

    constructor(private readonly authenticationService: AuthenticationService) { }

    @HttpCode(200)
    @Post('login')
    login(@Body() body: LoginDto): Observable<AxiosResponse<any, any>> {
        return this.authenticationService.login(body);
    }

    @HttpCode(200)
    @Post('logout')
    logout(@Body() body: TokenDto): Observable<AxiosResponse<any, any>> {
        return this.authenticationService.logout(body);
    }

    @HttpCode(200)
    @Post('validate-token')
    validateToken(@Body() body: TokenDto): Observable<AxiosResponse<any, any>> {
        return this.authenticationService.validateToken(body);
    }

    @HttpCode(200)
    @Post('user-details')
    userDetails(@Body() body: TokenDto): Observable<AxiosResponse<any, any>> {
        return this.authenticationService.userDetails(body);
    }

}
