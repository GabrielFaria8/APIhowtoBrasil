import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { interessesProviders } from "src/interesses/interesses.providers";
import { InteressesService } from "src/interesses/interesses.service";
import { FilesController } from "./files.controller";
import { filesProviders } from "./files.providers";
import { filesService } from "./files.service";



@Module({
    imports: [DatabaseModule],
    controllers:[FilesController],
    providers: [
    ...filesProviders,
    filesService,

    ...interessesProviders,
    InteressesService,


    
    ],
})


export class filesModule{
    
}