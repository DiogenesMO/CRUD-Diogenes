import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePcDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  ram: string;

  @IsString()
  procesador: string;

  @IsNotEmpty()
  @IsNumber()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  Disco_duro: string;
}
