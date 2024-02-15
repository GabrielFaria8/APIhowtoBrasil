import { Injectable } from '@nestjs/common';
import { MoradiaEntity } from './moradia.entity';

@Injectable()
export class MoradiaArmazenados {
  #Moradia: MoradiaEntity[] = [];

  AdicionarMoradia(Moradia: MoradiaEntity) {
    this.#Moradia.push(Moradia);
  }

  atualizaMoradia(id: string, dadosAtualizacao: Partial<MoradiaEntity>) {
    const Moradia = this.buscaporID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      Moradia[chave] = valor;
    });

    return Moradia;
  }

  private buscaporID(id: string) {
    const possivelMoradia = this.#Moradia.find(
      (MoradiaSalva) => MoradiaSalva.id === id,
    );

    if (possivelMoradia) {
      return possivelMoradia;
    }
  }

  async removeMoradia(id: string) {
    const Moradia = this.buscaporID(id);

    this.#Moradia = this.#Moradia.filter((MoradiaSalvo) => MoradiaSalvo.id !== id);
    return Moradia;
  }

  get Moradia() {
    return this.#Moradia;
  }
}
