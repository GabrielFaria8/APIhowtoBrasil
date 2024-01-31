import { Module } from "@nestjs/common";
import { TrabalhoController } from "./trabalho.controller";
import { TrabalhoArmazenados } from "./trabalho.dm";


@Module({
    controllers:[TrabalhoController,],
    providers: [TrabalhoArmazenados,]
})

export class TrabalhoModule{
    
}