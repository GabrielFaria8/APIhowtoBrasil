import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AlteraTrabalhoDTO{

  @IsString()
  @IsNotEmpty({ message: 'trabalho Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Assistente de T.I',
    description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
  })
  trabalho: string;
  
  @IsNumber()
  @IsNotEmpty({ message: 'tipo Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 3,
    description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
  })
  tipos: number;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Paschoalotto ',
    description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
  })
  nome: string;



  @IsString()
  @IsNotEmpty({ message: 'cidade Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'bauru-SP',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  cidadeEstado: string;

  

  @IsString()
  @IsNotEmpty({ message: 'Pré requisitos Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Ingles- avançado ',
    description: `Os pré requisitos são usados para identificar o que é necessário para entrar em uma vaga de emprego.`,
  })
  preRequisitos: string;

  @IsString()
  @IsNotEmpty({ message: 'Site da empresa Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Paschoalotto.com',
    description: `O link do site é usado identificar o site da empresa.`,
  })
  siteEmpresa: string;
 

}