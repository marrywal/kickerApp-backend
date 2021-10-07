import { IsString, IsInt } from 'class-validator';

export class CreatePlayerDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString()
    city: string;
}
