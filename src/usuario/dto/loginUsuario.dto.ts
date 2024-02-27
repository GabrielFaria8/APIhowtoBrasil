import { IsEmail, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaForte } from '../validacao/strongpass.validator';

export class LoginUsuarioDTO{

    @IsEmail(undefined,{message:"email é inválido"})
    @ApiProperty({
        example: 'teste@teste.com',
        description: `Email utilizado no cadastro.`,
    })
    email: string;

    @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    @SenhaForte({message: "Senha muito fraca"})
    @ApiProperty({
        example: 'Asd@444555666',
        description: `Senha utilizada no cadastro.`,
    })
    senha: string; 
}