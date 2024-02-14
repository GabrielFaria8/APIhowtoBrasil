import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AlteraEducacaoDTO{

  @IsString()
  @IsNotEmpty({ message: 'educação Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Senac',
    description: `A informação sobre educação é utilizada para identificar a área específica da saúde à qual o estabelecimento pertence.`,
  })
  educacao: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Ensino básico, Técnico e Superior',
    description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
  })
  nome: string;

 

}