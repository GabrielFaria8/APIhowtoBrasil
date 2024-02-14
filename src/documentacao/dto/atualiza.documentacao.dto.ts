import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AlteraDocumentacaoDTO{

  @IsString()
  @IsNotEmpty({ message: 'Documentação Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Passaporte',
    description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente..`,
  })
  documentacao: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Fórum da comarca',
    description: `O nome é utilizado para identificar o órgão competente e suas funções na mediação para com as regularizações`,
  })
  nome: string;

 

}