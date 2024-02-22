import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
  IsString,
  MinLength,
} from 'class-validator';

export class criaTrabalhoDTO{
  
  @IsString()
  @IsNotEmpty({ message: 'trabalho Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Telemarketing',
    description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
  })
  trabalho: string;
  
  @IsNumber()
  @IsNotEmpty({ message: 'tipo Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 3,
    description: ``,
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
  @IsNotEmpty({ message: 'Salario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: '1500,00',
    description: `Salario refere-se ao valor da remuneração da vaga.`,
  })
  salario: string;

  

  @IsString()
  @IsNotEmpty({ message: 'Pré requisitos Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Ingles',
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

  @IsString()
  @IsNotEmpty({ message: 'Foto não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
    description: `Específica a quantidade de vagas na residência.`,
  })
  foto: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'vaga para atendente',
    description: `Específica a quantidade de vagas na residência.`,
  })
  descricao: string;

}