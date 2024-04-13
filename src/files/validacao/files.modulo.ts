import { Module } from "@nestjs/common";
import { FilesController } from "../files.controller";
import { filesService } from "../files.service";

@Module({
    controllers:[FilesController],
    providers: [filesService]
})

export class FilesModule{
    
}