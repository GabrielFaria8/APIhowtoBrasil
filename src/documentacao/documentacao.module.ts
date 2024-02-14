import { Module } from "@nestjs/common";
import { DocumentacaoController } from "./documentacao.controller";
import { DocumentacaoArmazenados } from "./documentacao.dm";


@Module({
    controllers:[DocumentacaoController,],
    providers: [DocumentacaoArmazenados,]
})

export class DocumentacaoModule{
    
}