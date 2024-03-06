import { HttpException, Injectable } from '@nestjs/common';
import { throwError, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ApiResponse {
    getResponse(response: any): AxiosResponse<any> {
        if (!response.data) {
            response.data = {};
        }
        
        response.data.success = true;
        return response.data;
    }
    
    throwException(error: any): Observable<never> {
        return throwError(() => new HttpException({ success: false }, error?.response?.status || 401));
    }
}
