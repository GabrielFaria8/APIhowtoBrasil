import { InteressesArmazenados } from './interesses.dm';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { InteressesEntity } from './interesses.entity';
import { criaInteressesDTO } from './dto/interesses.dto';
import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
export declare class InteressesController {
    private clsinteressesArmazenados;
    constructor(clsinteressesArmazenados: InteressesArmazenados);
    Retornointeresses(): Promise<ListaInteressesDTO[]>;
    removeInteresses(id: string): Promise<{
        usuario: InteressesEntity;
        message: string;
    }>;
    atualizaInteresses(id: string, novosDadados: AlteraInteressesDTO): Promise<{
        Interesses: InteressesEntity;
        message: string;
    }>;
    criaInteresses(dadosInteresses: criaInteressesDTO): Promise<{
        id: string;
        message: string;
    }>;
}
