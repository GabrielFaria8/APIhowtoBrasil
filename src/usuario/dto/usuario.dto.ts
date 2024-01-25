import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";


export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome:string;
    
    @IsString()
    ultimoNome: string;

    @IsString()
    statusMigratório: string;

    @IsString()
    interesses: string;

    @IsEmail(undefined,{message:"email é inválido"})
    @EmailUnico({message:"O email informado já existe"})
    email: string;


    @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    senha: string; 
}