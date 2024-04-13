/// <reference types="multer" />
import { filesService } from './files.service';
import { Request } from 'express';
export declare class FilesController {
    private readonly arquivos;
    constructor(arquivos: filesService);
    uploadArquivo(file: Express.Multer.File, req: Request): Promise<string>;
    retornaArquivo(image: any, res: any): any;
}
