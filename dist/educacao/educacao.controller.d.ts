import { EducacaoArmazenados } from './educacao.dm';
import { ListaEducacaoDTO } from './dto/lista.educacao.dto';
import { EducacaoEntity } from './educacao.entity';
import { criaEducacaoDTO } from './dto/educacao.dto';
import { AlteraEducacaoDTO } from './dto/atualiza.educacao.dto';
export declare class EducacaoController {
    private clseducacaoArmazenados;
    constructor(clseducacaoArmazenados: EducacaoArmazenados);
    Retornoeducacao(): Promise<ListaEducacaoDTO[]>;
    removeEducacao(id: string): Promise<{
        usuario: EducacaoEntity;
        message: string;
    }>;
    atualizaEducacao(id: string, novosDadados: AlteraEducacaoDTO): Promise<{
        Educacao: EducacaoEntity;
        message: string;
    }>;
    criaEducacao(dadosEducacao: criaEducacaoDTO): Promise<{
        id: string;
        message: string;
    }>;
}
