import { IsNotEmpty } from 'class-validator';

export class TokenDto {
    @IsNotEmpty()
    sessionToken: string;
}
