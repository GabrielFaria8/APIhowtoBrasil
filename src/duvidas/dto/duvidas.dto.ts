import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class criaDuvidasDTO {
    @IsString ()
    @IsNotEmpty({ message: 'pergunta não pode ser vazio'})
    @IsOptional ()
    @ApiPropertyOptional ({
        example: "Diferença entre ONG e locais de apoio?",
        description: 'pergunta diz respeito somente a questão pretendida a sanar'
     })
     pergunta: string;

     @IsString ()
     @IsNotEmpty({ message: 'Resposta não pode ser vazio'})
     @IsOptional ()
     @ApiPropertyOptional ({
        example: 'ONGs possuem amparo governamental, locais de apoio não nescessariamente',
        description: 'Resposta trata-se da informação que pode sanar a pergunta apresentada'
     })
     resposta: string

}