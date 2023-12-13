import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  gender: 'male' | 'female';
}
