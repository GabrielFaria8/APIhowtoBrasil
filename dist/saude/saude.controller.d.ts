import { SaudeArmazenados } from './saude.dm';
import { ListaSaudeDTO } from './dto/lista.saude.dto';
import { SaudeEntity } from './saude.entity';
import { criaSaudeDTO } from './dto/saude.dto';
import { AleteraSaudeDTO } from './dto/atualiza.saude.dto';
export declare class SaudeController {
    private clssaudeArmazenados;
    constructor(clssaudeArmazenados: SaudeArmazenados);
    Retornosaude(): Promise<ListaSaudeDTO[]>;
    removeSaude(id: string): Promise<{
        usuario: SaudeEntity;
        message: string;
    }>;
    atualizaSaude(id: string, novosDadados: AleteraSaudeDTO): Promise<{
        Saude: SaudeEntity;
        message: string;
    }>;
    criaSaude(dadosSaude: criaSaudeDTO): Promise<{
        id: string;
        message: string;
    }>;
}
