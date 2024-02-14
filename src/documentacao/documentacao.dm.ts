import { Injectable } from '@nestjs/common';
import { DocumentacaoEntity } from './documentacao.entity';

@Injectable()
export class DocumentacaoArmazenados {
  #documentacao: DocumentacaoEntity[] = [];

  AdicionarDocumentacao(documentacao: DocumentacaoEntity) {
    this.#documentacao.push(documentacao);
  }

  atualizaDocumentacao(id: string, dadosAtualizacao: Partial<DocumentacaoEntity>) {
    const documentacao = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      documentacao[chave] = valor;
    });

    return documentacao;
  }

  private buscaporID(id: string) {
    const possivelDocumentacao = this.#documentacao.find(
      (documentacaoSalva) => documentacaoSalva.id === id,
    );

    if (possivelDocumentacao) {
      return possivelDocumentacao;
    }
  }

  async removeDocumentacao(id: string) {
    const documentacao = this.buscaporID(id);

    this.#documentacao = this.#documentacao.filter((documentacaoSalvo) => documentacaoSalvo.id !== id);
    return documentacao;
  }

  get Documentacao() {
    return this.#documentacao;
  }
}
