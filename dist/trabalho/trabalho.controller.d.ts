import { TrabalhoArmazenados } from './trabalho.dm';
import { ListaTrabalhoDTO } from './dto/lista.trabalho.dto';
import { TrabalhoEntity } from './trabalho.entity';
import { criaTrabalhoDTO } from './dto/trabalho.dto';
import { AlteraTrabalhoDTO } from './dto/atualiza.trabalho.dto';
export declare class TrabalhoController {
    private clstrabalhoArmazenados;
    constructor(clstrabalhoArmazenados: TrabalhoArmazenados);
    Retornotrabalho(): Promise<ListaTrabalhoDTO[]>;
    removeTrabalho(id: string): Promise<{
        usuario: TrabalhoEntity;
        message: string;
    }>;
    atualizaTrabalho(id: string, novosDados: AlteraTrabalhoDTO): Promise<{
        Trabalho: TrabalhoEntity;
        message: string;
    }>;
    criaTrabalho(dadosTrabalho: criaTrabalhoDTO): Promise<{
        id: string;
        message: string;
    }>;
}
