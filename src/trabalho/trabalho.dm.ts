import { Injectable } from '@nestjs/common';
import { TrabalhoEntity } from './trabalho.entity';

@Injectable()
export class TrabalhoArmazenados {
  #trabalho: TrabalhoEntity[] = [];

  AdicionarTrabalho(trabalho: TrabalhoEntity) {
    this.#trabalho.push(trabalho);
  }

  atualizaTrabalho(id: string, dadosAtualizacao: Partial<TrabalhoEntity>) {
    const trabalho = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      trabalho[chave] = valor;
    });

    return trabalho;
  }

  private buscaporID(id: string) {
    const possivelTrabalho = this.#trabalho.find(
      (trabalhoSalva) => trabalhoSalva.id === id,
    );

    if (possivelTrabalho) {
      return possivelTrabalho;
    }
  }

  async removeTrabalho(id: string) {
    const trabalho = this.buscaporID(id);

    this.#trabalho = this.#trabalho.filter((trabalhoSalvo) => trabalhoSalvo.id !== id);
    return trabalho;
  }

  get Trabalho() {
    return this.#trabalho;
  }
}
