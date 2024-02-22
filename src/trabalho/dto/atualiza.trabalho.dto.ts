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
    example: 'Tecnologia',
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
  @IsNotEmpty({ message: 'cidade Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: '1500,00',
    description: `Define a remuneração da vaga`,
  })
  salario: string;

  @IsString()
  @IsNotEmpty({ message: 'Foto não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
    description: `Define a foto de faixada da empresa`,
  })
  foto: string;

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

  @IsString()
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'vaga para atendente',
    description: `Descrição versa sobre a designação da vaga`,
  })
  descricao: string;
 

}