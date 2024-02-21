import { MoradiaArmazenados } from './moradia.dm';
import { ListaMoradiaDTO } from './dto/lista.moradia.dto';
import { MoradiaEntity } from './moradia.entity';
import { criaMoradiaDTO } from './dto/moradia.dto';
import { AlteraMoradiaDTO } from './dto/atualiza.moradia.dto';
export declare class MoradiaController {
    private clsmoradiaArmazenados;
    constructor(clsmoradiaArmazenados: MoradiaArmazenados);
    Retornomoradia(): Promise<ListaMoradiaDTO[]>;
    removemoradia(id: string): Promise<{
        usuario: MoradiaEntity;
        message: string;
    }>;
    atualizamoradia(id: string, novosDadados: AlteraMoradiaDTO): Promise<{
        moradia: MoradiaEntity;
        message: string;
    }>;
    criamoradia(dadosmoradia: criaMoradiaDTO): Promise<{
        id: string;
        message: string;
    }>;
}
