/// <reference types="multer" />
import { Files } from './files.entity';
import { Request } from 'express';
import { Repository } from 'typeorm/repository/Repository';
export declare class filesService {
    private filesRepository;
    constructor(filesRepository: Repository<Files>);
    salvarDados(file: Express.Multer.File, req: Request): Promise<string>;
    localizarID(id: string): Promise<Files>;
    busca(id: string): Promise<Files>;
    validaArquivo(fileName: string): Promise<Files[]>;
}
