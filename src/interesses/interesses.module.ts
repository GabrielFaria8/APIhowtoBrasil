import { Module } from "@nestjs/common";
import { InteressesController } from "./interesses.controller";
import { InteressesArmazenados } from "./interesses.dm";


@Module({
    controllers:[InteressesController,],
    providers: [InteressesArmazenados,]
})

export class InteressesModule{
    
}