import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AlteraInteressesDTO{

  @IsString()
  @IsNotEmpty({ message: 'interesses Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Educação',
    description: `A informação sobre interesses é utilizada para identificar a área específica de interesses à qual o tipo pertence.`,
  })
  tipos: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Trabalho',
    description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
  })
  nome: string;

}