import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { TokenDto } from './dto/token.dto';
import { ApiResponse } from './utils/api-response';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ApiHeader } from './utils/api-header';

@Injectable()
export class AuthenticationService {
  private readonly sca2ApiURL: string;

  constructor(
    private readonly httpService: HttpService, 
    private readonly configService: ConfigService, 
    private readonly apiHeader: ApiHeader, 
    private readonly apiResponse: ApiResponse
    ) {
    this.sca2ApiURL = this.configService.get<string>('SCA2_API_URL');
  }

  login(data: LoginDto): Observable<AxiosResponse<any>> {
    return this.httpService.post(this.sca2ApiURL + '/login', data, this.apiHeader.getFormData())
    .pipe(
      map(response => this.apiResponse.getResponse(response)),
      catchError(e => this.apiResponse.throwException(e))
    );
  }

  logout(data: TokenDto): Observable<AxiosResponse<any>> {
    return this.httpService.post(this.sca2ApiURL + '/logout', null, this.apiHeader.getAuthorization(data))
    .pipe(
      map(response => this.apiResponse.getResponse(response)),
      catchError(e => this.apiResponse.throwException(e))
    );
  }

  validateToken(data: TokenDto): Observable<AxiosResponse<any>> {
    return this.httpService.post(this.sca2ApiURL + '/validar', null, this.apiHeader.getAuthorization(data))
    .pipe(
      map(response => this.apiResponse.getResponse(response)),
      catchError(e => this.apiResponse.throwException(e))
    );
  }

  userDetails(data: TokenDto): Observable<AxiosResponse<any>> {
    return this.httpService.get(this.sca2ApiURL + '/usuario', this.apiHeader.getAuthorization(data))
    .pipe(
      map(response => this.apiResponse.getResponse(response)),
      catchError(e => this.apiResponse.throwException(e))
    );
  }

}
