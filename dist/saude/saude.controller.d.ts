import { SaudeArmazenados } from './saude.dm';
import { ListaSaudeDTO } from './dto/lista.saude.dto';
import { criaSaudeDTO } from './dto/saude.dto';
export declare class SaudeController {
    private clssaudeArmazenados;
    constructor(clssaudeArmazenados: SaudeArmazenados);
    Retornosaude(): Promise<ListaSaudeDTO[]>;
    criaSaude(dadosSaude: criaSaudeDTO): Promise<{
        id: string;
        message: string;
    }>;
}
