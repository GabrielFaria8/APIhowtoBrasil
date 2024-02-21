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

export class criaMoradiaDTO{

  @IsString()
  @IsNotEmpty({ message: 'educação Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Senac',
    description: `A informação sobre educação é utilizada para identificar a área específica da educação à qual o estabelecimento pertence.`,
  })
  moradia: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Ensino básico, Técnico e Superior',
    description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Endereco Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua dom pedro 5-40',
    description: `O endereço é utilizado para identificar a localização do estabelecimento.`,
  })
  endereco: string;

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
    example: 'Dás 14:00 até 22:00',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  Horario: string;
  @IsNumber()
  @IsNotEmpty({ message: 'Tipos Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Educação',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  tipos: number;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:0',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  LinkMaps: string;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:0',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  linkGoverno: string;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:0',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  linkCorrelatos: string;

}