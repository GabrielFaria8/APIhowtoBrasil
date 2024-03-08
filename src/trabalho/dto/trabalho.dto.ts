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
  
  @IsString()
  @IsNotEmpty({ message: 'interação Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'O que devo fazer caso eu fique doente?',
    description: `A interação é usado para especificar o endereço do estabelecimento.`,
  })
  interacao: string;

  @IsString()
  @IsNotEmpty({ message: 'Link Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:
      'Leve seu Protocolo Provisório ou Carteira de Registro Nacional Migratório (antigo Registro Nacional de Estrangeiro  RNE) e CPF quando for a uma UBS pela primeira vez. Você receberá uma carteirinha do SUS. Esse documento contém toda informação médica sobre seu portador e provê acesso a consultas e exames. Você deverá levar a carteirinha do SUS toda vez que procurar assistência médica.',
    description: `A  sub interação é usado para especificar o endereço do estabelecimento.`,
  })
  subInteracao: string;

}