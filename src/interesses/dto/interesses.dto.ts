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

export class criaInteressesDTO {
  @IsNumber()
  @IsNotEmpty({ message: 'Tipo não pode ser vazio' })
  @ApiPropertyOptional({
    example: 1,
    description: `A informação sobre interesses é utilizada para identificar a área específica  à qual o tipo pertence.`,
  })
  tipos: number;

  @IsString()
  @IsNotEmpty({ message: 'Nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Trabalho',
    description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Numero Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: '(00)00000-0000',
    description: `O número de telefone é usado para contato com o estabelecimento.`,
  })
  numero: string;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:00',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  horario: string;

  @IsString()
  @IsNotEmpty({ message: 'Link Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua xxx, bairro xxx',
    description: `O Link é usado para especificar o endereço do estabelecimento.`,
  })
  linkMaps: string;

  @IsString()
  @IsNotEmpty({ message: 'trabalho Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Telemarketing',
    description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
  })
  trabalho: string;

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
