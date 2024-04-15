import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SenhaForte } from "../validator/strongpass.validator";

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
}