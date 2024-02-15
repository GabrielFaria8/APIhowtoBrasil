import { Request } from 'express';
export declare class FilesArmazenados {
    arquivos: any[];
    salvarDados(file: Express.Multer.File, req: Request): Promise<string>;
    validaArquivo(nome: string): Promise<boolean>;
}
