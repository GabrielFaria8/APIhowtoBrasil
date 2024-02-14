import { Injectable } from '@nestjs/common';
import { InteressesEntity } from './interesses.entity';

@Injectable()
export class InteressesArmazenados {
  #interesses: InteressesEntity[] = [];

  AdicionarInteresses(interesses: InteressesEntity) {
    this.#interesses.push(interesses);
  }

  atualizaInteresses(id: string, dadosAtualizacao: Partial<InteressesEntity>) {
    const interesses = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      interesses[chave] = valor;
    });

    return interesses;
  }

  private buscaporID(id: string) {
    const possivelInteresses = this.#interesses.find(
      (interessesSalva) => interessesSalva.id === id,
    );

    if (possivelInteresses) {
      return possivelInteresses;
    }
  }

  async removeInteresses(id: string) {
    const interesses = this.buscaporID(id);

    this.#interesses = this.#interesses.filter((interessesSalvo) => interessesSalvo.id !== id);
    return interesses;
  }

  get Interesses() {
    return this.#interesses;
  }
}
