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
  @IsOptional()
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
  Numero: string;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:00',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  Horario: string;

  @IsString()
  @IsNotEmpty({ message: 'Link Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua xxx, bairro xxx',
    description: `O Link é usado para especificar o endereço do estabelecimento.`,
  })
  LinkMaps: string;

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
