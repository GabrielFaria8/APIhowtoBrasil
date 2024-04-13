import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { filesProviders } from "src/files/files.providers";
import { filesService } from "src/files/files.service";
import { InteressesController } from "./interesses.controller";
import { interessesProviders } from "./interesses.providers";
import { InteressesService } from "./interesses.service";



@Module({
    imports: [DatabaseModule],
    controllers:[InteressesController],
    providers: [
    ...interessesProviders,
    InteressesService,

    ...filesProviders,
    filesService,

    
    ],
})


export class InteressesModule{
    
}