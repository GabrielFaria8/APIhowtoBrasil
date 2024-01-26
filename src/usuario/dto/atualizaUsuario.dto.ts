import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';
import { SenhaForte } from '../validacao/strongpass.validator';

export class AlteraUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Carlos',
    description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  nome: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Visto de Trabalho',
    description: `O ultimo nome é usado para identificar o usuário, em telas, cadastros e outros.`,
  })
  ultimoNome: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Edurado',
    description: `O status migratório é utilizada para saber o motivo da imigração do usuário ao brasil.`,
  })
  statusMigratório: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Trabalho',
    description: `O interesse é utilizada para saber o que o usuario está precisando no brasil.`,
  })
  @IsString()
  interesses: string;

  @IsEmail(undefined, { message: 'email é inválido' })
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
}
