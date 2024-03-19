import { Module } from "@nestjs/common";
import { DuvidasController } from "./duvidas.controller";
import { DuvidasArmazenados } from "./duvidas.dm";


@Module({
    controllers:[DuvidasController,],
    providers: [DuvidasArmazenados,]
})

export class DuvidasModule{
    
}