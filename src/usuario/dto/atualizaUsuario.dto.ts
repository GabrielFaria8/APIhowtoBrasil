import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';
import { SenhaForte } from '../validacao/strongpass.validator';

export class AlteraUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Karllos',
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  nome: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Turista',
    description: `O ultimo nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  ultimoNome: string;

  
}
