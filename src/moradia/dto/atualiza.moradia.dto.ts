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

export class AlteraMoradiaDTO{

  @IsString()
  @IsNotEmpty({ message: 'Moradia não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Casa',
    description: `A informação sobre moradia é utilizada para identificar possíveis localizações de locais para habitação`,
  })
  moradia: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Casa à venda com 3 quartos no CENTRO, Araraquara',
    description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
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
    example: 'Dás 14:00 até 22:00',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  Horario: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Tipos' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 1,
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
  @IsNotEmpty({ message: 'Link correlato não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://www.moradiabrasil.com.br/',
    description: `O link correlato possui função de localizar hospedagens de sites online onde é possível localizar habitações.`,
  })
  linkCorrelatos: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Área  não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 47 + 'm²',
    description: `A área é utilizada para se dar uma base do tamanho da residência.`,
  })
  area: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Quartos não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 2,
    description: `Específica quantidade de quartos na residência.`,
  })
  quartos: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Valor não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'R$' + 600.00,
    description: `Específica o valor da residência.`,
  })
  valor: number;
  
  @IsNumber()
  @IsNotEmpty({ message: 'Banheiro não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  1,
    description: `Específica a quantidade de banheiros na residência.`,
  })
  banheiro: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Vagas não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  1,
    description: `Específica a quantidade de vagas na residência.`,
  })
  vagas: number;

  @IsString()
  @IsNotEmpty({ message: 'Foto não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
    description: `Função de foto define uma imagem representativa.`,
  })
  foto: string;

}