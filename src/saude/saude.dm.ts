import { Injectable } from '@nestjs/common';
import { SaudeEntity } from './saude.entity';

@Injectable()
export class SaudeArmazenados {
  #saude: SaudeEntity[] = [];

  AdicionarSaude(saude: SaudeEntity) {
    this.#saude.push(saude);
  }

  atualizaSaude(id: string, dadosAtualizacao: Partial<SaudeEntity>) {
    const saude = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      saude[chave] = valor;
    });

    return saude;
  }

  private buscaporID(id: string) {
    const possivelSaude = this.#saude.find(
      (saudeSalva) => saudeSalva.id === id,
    );

    if (!possivelSaude) {
      return possivelSaude;
    }
  }

  async removeSaude(id: string) {
    const saude = this.buscaporID(id);

    this.#saude = this.#saude.filter((saudeSalvo) => saudeSalvo.id !== id);
    return saude;
  }

  get Saude() {
    return this.#saude;
  }
}
