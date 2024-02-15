import { Module } from "@nestjs/common";
import { EducacaoController } from "./moradia.controller";
import { EducacaoArmazenados } from "./moradia.dm";


@Module({
    controllers:[EducacaoController,],
    providers: [EducacaoArmazenados,]
})

export class EducacaoModule{
    
}