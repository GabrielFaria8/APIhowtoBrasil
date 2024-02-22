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

export class AlteraDocumentacaoDTO{

  @IsString()
  @IsNotEmpty({ message: 'Documentação não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Passaporte',
    description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente.`,
  })
  documentacao: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Tipos não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 4,
    description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente.`,
  })
  tipos: number;

  @IsString()
  @IsNotEmpty({ message: 'Nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Fórum da comarca',
    description: `O nome é utilizado para identificar o órgão competente e suas funções na mediação para com as regularizações.`,
  })
  nome: string;



  @IsString()
  @IsNotEmpty({ message: 'Link do site Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Gov.br',
    description: `O link do site é usado identificar o site do Orgão Governamental.`,
  })
  linkGoverno: string;

 

}