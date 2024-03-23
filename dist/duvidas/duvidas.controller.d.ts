import { DuvidasArmazenados } from './duvidas.dm';
import { ListaDuvidasDTO } from './dto/lista.duvidas.dto';
import { DuvidasEntity } from './duvidas.entity';
import { criaDuvidasDTO } from './dto/duvidas.dto';
import { AlteraDuvidasDTO } from './dto/atualiza.duvidas.dto';
export declare class DuvidasController {
    private clsduvidasArmazenados;
    constructor(clsduvidasArmazenados: DuvidasArmazenados);
    Retornoduvidas(): Promise<ListaDuvidasDTO[]>;
    removeDuvidas(id: string): Promise<{
        usuario: DuvidasEntity;
        message: string;
    }>;
    atualizaDuvidas(id: string, novosDadados: AlteraDuvidasDTO): Promise<{
        Duvidas: DuvidasEntity;
        message: string;
    }>;
    AdicionarDuvidas(dadosDuvidas: criaDuvidasDTO): Promise<{
        id: string;
        message: string;
    }>;
}
