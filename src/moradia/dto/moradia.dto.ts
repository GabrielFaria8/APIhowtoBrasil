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
  @IsNotEmpty({ message: 'Moradia não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Senac',
    description: `A informação sobre moradia é utilizada para identificar possíveis localizações de locais para habitação`,
  })
  moradia: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome Não pode ser vazio' })
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
  @IsNotEmpty({ message: 'Tipos' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Educação',
    description: `Os tipos são usados para identificar a área atuante do componente.`,
  })
  tipos: number;

  @IsString()
  @IsNotEmpty({ message: 'Link do maps não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://www.google.com.br/maps/preview',
    description: `O link maps é utilizado para maior precisão da localização de estabelecimentos.`,
  })
  LinkMaps: string;

  @IsString()
  @IsNotEmpty({ message: 'Link governo não pode ser vazio'})
  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://www.gov.br/pt-br',
    description: `O link governamental é utilizado para identificar local de hospedagem de sites governamentais.`,
  })
  linkGoverno: string;

  @IsString()
  @IsNotEmpty({ message: 'Link correlato não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://www.moradiabrasil.com.br/',
    description: `O link correlato possui função de localizar hospedagens de sites online onde é possível localizar habitações.`,
  })
  linkCorrelatos: string;

}