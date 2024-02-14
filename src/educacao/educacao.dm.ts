import { Injectable } from '@nestjs/common';
import { EducacaoEntity } from './educacao.entity';

@Injectable()
export class EducacaoArmazenados {
  #educacao: EducacaoEntity[] = [];

  AdicionarEducacao(educacao: EducacaoEntity) {
    this.#educacao.push(educacao);
  }

  atualizaEducacao(id: string, dadosAtualizacao: Partial<EducacaoEntity>) {
    const educacao = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      educacao[chave] = valor;
    });

    return educacao;
  }

  private buscaporID(id: string) {
    const possivelEducacao = this.#educacao.find(
      (educacaoSalva) => educacaoSalva.id === id,
    );

    if (possivelEducacao) {
      return possivelEducacao;
    }
  }

  async removeEducacao(id: string) {
    const educacao = this.buscaporID(id);

    this.#educacao = this.#educacao.filter((educacaoSalvo) => educacaoSalvo.id !== id);
    return educacao;
  }

  get Educacao() {
    return this.#educacao;
  }
}
