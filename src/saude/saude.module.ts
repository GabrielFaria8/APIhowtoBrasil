import { Module } from "@nestjs/common";
import { SaudeController } from "./saude.controller";
import { SaudeArmazenados } from "./saude.dm";


@Module({
    controllers:[SaudeController,],
    providers: [SaudeArmazenados,]
})

export class SaudeModule{
    
}