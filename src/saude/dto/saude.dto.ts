import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class criaSaudeDTO{

  @IsString()
  @IsNotEmpty({ message: 'saude Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'farmácia',
    description: `A informação sobre saúde é utilizada para identificar a área específica da saúde à qual o estabelecimento pertence.`,
  })
  saude: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Farmácia Nissei',
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
    example: 'Dás 14:00 até 22:0',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  Horario: string;

}