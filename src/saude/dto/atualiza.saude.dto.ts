import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AleteraSaudeDTO{

  @IsString()
  @IsNotEmpty({ message: 'saude Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Posto de saude',
    description: `A informação sobre saúde é utilizada para identificar a área específica da saúde à qual o estabelecimento pertence.`,
  })
  saude: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Posto de saude Bela Vista',
    description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
  })
  nome: string;

 

}