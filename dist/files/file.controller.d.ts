/// <reference types="multer" />
import { FilesArmazenados } from './files.dm';
import { Request } from 'express';
export declare class FilesController {
    private readonly arquivos;
    constructor(arquivos: FilesArmazenados);
    uploadArquivo(file: Express.Multer.File, req: Request): Promise<string>;
    retornaArquivo(image: any, res: any): any;
}
