import { Injectable } from '@nestjs/common';
import { DuvidasEntity } from './duvidas.entity';

@Injectable()
export class DuvidasArmazenados {
  #duvidas: DuvidasEntity[] = [];

  AdicionarDuvidas(duvidas: DuvidasEntity) {
    this.#duvidas.push(duvidas);
  }

  atualizaDuvidas(id: string, dadosAtualizacao: Partial<DuvidasEntity>) {
    const duvidas = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      duvidas[chave] = valor;
    });

    return duvidas;
  }

  private buscaporID(id: string) {
    const possivelDuvidas = this.#duvidas.find(
      (duvidasSalva) => duvidasSalva.id === id,
    );

    if (possivelDuvidas) {
      return possivelDuvidas;
    }
  }

  async removeDuvidas(id: string) {
    const duvidas = this.buscaporID(id);

    this.#duvidas = this.#duvidas.filter((duvidasSalva) => duvidasSalva.id !== id);
    return duvidas;
  }

  get duvidas() {
    return this.#duvidas;
  }
}