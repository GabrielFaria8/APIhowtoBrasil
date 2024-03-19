import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class AlteraDuvidasDTO {
    @IsString()
    @IsNotEmpty({ message: 'Pergunta não pode ser vazio' })
    @IsOptional()
    @ApiPropertyOptional({
      example: 'Documento inicial para entrada no país?',
      description: `Trata-se de questão`,
    })
    pergunta: string;

    @IsString()
    @IsNotEmpty ({ message: 'Resposta não pode ser vazio'})
    @IsOptional ()
    @ApiPropertyOptional({
        example: 'Visto',
        description: 'pergunta refere-se a Resposta para a dúvida anterior'
    })
    resposta: string
}