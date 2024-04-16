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

export class AlteraInteressesDTO{

  @IsNumber()
  @IsNotEmpty({ message: 'Tipo não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 2,
    description: `A informação sobre interesses é utilizada para identificar a área específica  à qual o tipo pertence.`,
  })
  tipos: number;

  @IsString()
  @IsNotEmpty({ message: 'Nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'moradia',
    description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Numero Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: "(00)00000-0000",
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
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'vaga para atendente',
    description: `Específica a quantidade de vagas na residência.`,
  })
  descricao: string;

  @IsString()
  @IsNotEmpty({ message: 'Documentação não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Passaporte',
    description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente.`,
  })
  documento: string;

  @IsString()
  @IsNotEmpty({ message: 'Link do site Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Gov.br',
    description: `O link do site é usado identificar o site do Orgão Governamental.`,
  })
  linkGoverno: string;

  @IsString()
  @IsNotEmpty({ message: 'Moradia não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Apartamento',
    description: `A informação sobre moradia é utilizada para identificar o nome da moradia.`,
  })
  moradia: string;

  @IsString()
  @IsNotEmpty({ message: 'Link correlato não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://www.moradiabrasil.com.br/',
    description: `O link correlato possui função de localizar hospedagens de sites online onde é possível localizar habitações.`,
  })
  linkCorrelato: string;

  @IsString()
  @IsNotEmpty({ message: 'Área  não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: '47m²',
    description: `A área é utilizada para se dar uma base do tamanho da residência.`,
  })
  area: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Quartos não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 2,
    description: `Específica quantidade de quartos na residência.`,
  })
  quartos: number;

  @IsString()
  @IsNotEmpty({ message: 'Valor não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example:  'R$ 600,00',
    description: `Específica o valor da residência.`,
  })
  valor: string;
  
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
  @IsOptional()
  @ApiPropertyOptional({
    example:  'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
    description: `Específica a quantidade de vagas na residência.`,
  })
  files: string;

}