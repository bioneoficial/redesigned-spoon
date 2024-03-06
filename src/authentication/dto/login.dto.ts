import { IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    ticket: string;

    @IsNotEmpty()
    service: string;
}
