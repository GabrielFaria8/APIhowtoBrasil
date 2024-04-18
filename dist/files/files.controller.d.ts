/// <reference types="multer" />
import { filesService } from './files.service';
import { Request } from 'express';
export declare class FilesController {
    private readonly arquivos;
    constructor(arquivos: filesService);
    uploadArquivo(file: Express.Multer.File, req: Request): any;
    retornaArquivo(image: any, res: any): Promise<any>;
}
