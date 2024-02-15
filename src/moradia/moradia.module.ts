import { Module } from "@nestjs/common";
import { MoradiaController } from "./moradia.controller";
import { MoradiaArmazenados } from "./moradia.dm";


@Module({
    controllers:[MoradiaController,],
    providers: [MoradiaArmazenados,]
})

export class MoradiaModule{
    
}