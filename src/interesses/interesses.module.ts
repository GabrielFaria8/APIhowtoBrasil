import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { InteressesController } from "./interesses.controller";
import { interessesProviders } from "./interesses.providers";
import { InteressesService } from "./interesses.service";



@Module({
    imports: [DatabaseModule],
    controllers:[InteressesController],
    providers: [
    ...interessesProviders,
    InteressesService,

    
    ],
})


export class InteressesModule{
    
}