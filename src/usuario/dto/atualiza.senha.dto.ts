import {ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  MinLength,
} from 'class-validator';
import { SenhaForte } from '../validator/strongpass.validator';


export class atualizaSenhaDTO {


  @IsEmail(undefined, { message: 'Email é inválido' })
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