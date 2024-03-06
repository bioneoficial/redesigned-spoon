import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from "axios";

@Injectable()
export class ApiHeader {
    getAuthorization(data: any): AxiosRequestConfig<any> {
        return { headers: { Authorization: `Bearer ${data.sessionToken}` } };
    }
    
    getFormData(): AxiosRequestConfig<any> {
        return { headers: { 'Content-Type': 'multipart/form-data' } };
    }
}
