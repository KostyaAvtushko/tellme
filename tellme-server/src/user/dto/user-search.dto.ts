import { IsNotEmpty } from 'class-validator';

export class UserSearchDto {
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  gender: 'male' | 'female';
}
