import { DocumentacaoArmazenados } from './documentacao.dm';
import { ListaDocumentacaoDTO } from './dto/lista.documentacao.dto';
import { DocumentacaoEntity } from './documentacao.entity';
import { criaDocumentacaoDTO } from './dto/documentacao.dto';
import { AlteraDocumentacaoDTO } from './dto/atualiza.documentacao.dto';
export declare class DocumentacaoController {
    private clsdocumentacaoArmazenados;
    constructor(clsdocumentacaoArmazenados: DocumentacaoArmazenados);
    Retornodocumentacao(): Promise<ListaDocumentacaoDTO[]>;
    removeDocumentacao(id: string): Promise<{
        usuario: DocumentacaoEntity;
        message: string;
    }>;
    atualizaDocumentacao(id: string, novosDadados: AlteraDocumentacaoDTO): Promise<{
        Documentacao: DocumentacaoEntity;
        message: string;
    }>;
    criaDocumentacao(dadosDocumentacao: criaDocumentacaoDTO): Promise<{
        id: string;
        message: string;
    }>;
}
