import { Module } from "@nestjs/common";
import { EducacaoController } from "./educacao.controller";
import { EducacaoArmazenados } from "./educacao.dm";


@Module({
    controllers:[EducacaoController,],
    providers: [EducacaoArmazenados,]
})

export class EducacaoModule{
    
}