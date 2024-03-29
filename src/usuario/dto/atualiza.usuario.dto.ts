import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailUnico } from '../validator/email-unico.validator';
import { SenhaForte } from '../validator/strongpass.validator';

export class AlteraUsuarioDTO{

  @IsString()
  @IsNotEmpty({ message: 'Nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'moradia',
    description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Ultimo nome Não pode ser vazi' })
  @IsOptional()
  @ApiPropertyOptional({
    example: "Visto de Trabalho",
    description: `O último nome é utilizado para identificar o usuário em telas, cadastros e outros contextos.`,
  })
  ultimoNome: string;

  @IsString()
  @IsNotEmpty({ message: 'Status migratorio nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Edurado',
    description: `O status migratório é utilizado para compreender o motivo da imigração do usuário para o Brasil.`,
  })
  statusMigratorio: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Interesses nome Não pode ser vazio' })
  @ApiPropertyOptional({
    example: 'Trabalho',
    description: `Os interesses são utilizados para compreender as necessidades do usuário no Brasil.`,
  })
  @IsString()
  interesses: string;

  @IsEmail(undefined, { message: 'Email é inválido' })
  @EmailUnico({ message: 'O email informado já existe' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'teste@teste.com',
    description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
  })
  email: string;

  @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    @SenhaForte({message: "Senha muito fraca"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha: string;

    @IsOptional()
    @ApiProperty({
        example: 'nomearquivo-idarquivo.png',
        description: `Esse campo é responsável pela foto do usuário, para ser enviado o dado correto é necessário que seja feito o upload pelo modulo FILES.`,
    })
    foto: string; 

  
}