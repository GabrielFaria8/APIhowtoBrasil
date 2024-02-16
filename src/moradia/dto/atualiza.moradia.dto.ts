import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AlteraMoradiaDTO{

  @IsString()
  @IsNotEmpty({ message: 'Moradia Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Casa',
    description: `A informação sobre moradia é utilizada para identificar a localização do terreno.`,
  })
  moradia: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Paschoalotto ',
    description: `O nome é utilizado para identificar o estabelecimento em tela, cadastro e outros contextos.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Numero Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: "(00)00000-0000",
    description: `O número de telefone é usado para contato com o estabelecimento.`,
  })
  Numero: string;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:0',
    description: `O horário é usado para especificar o horário de funcionamento do estabelecimento.`,
  })
  Horario: string;

  @IsString()
  @IsNotEmpty({ message: 'Link do endereço Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Bauru Empregos',
    description: `O link do endereço é usado identificar o endereço do estabelecimento no maps.`,
  })
  LinkMaps: string;

  @IsString()
  @IsNotEmpty({ message: 'Pré requisitos Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Ingles',
    description: `Os pré requisitos são usados para identificar o que é necessário para candidatar-se a uma vaga de emprego.`,
  })
  PreRequisitos: string;

  @IsString()
  @IsNotEmpty({ message: 'Site da empresa Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Paschoalotto',
    description: `O link do site é usado identificar o endereço web da empresa.`,
  })
  SiteEmpresa: string;
 
 

}