import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class criaSaudeDTO{

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'farmácia',
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  saude: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'farmácia casca grossa',
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua dom pedro 5-40',
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  endereco: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: "14 9968-6852",
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  Numero: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:0',
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  Horario: string;

}