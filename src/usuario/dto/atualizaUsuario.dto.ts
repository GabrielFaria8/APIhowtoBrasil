import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    nome:string;
    
    @IsString()
    @IsOptional()
    ultimoNome: string;

    @IsString()
    @IsOptional()
    statusMigratório: string;

    
    @IsString()
    @IsOptional()
    interesses: string;


    @IsEmail(undefined,{message:"email é inválido"})
    @EmailUnico({message:"O email informado já existe"})
    @IsOptional()
    email: string;

    @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    @IsOptional()
    senha: string; 
}