import { Injectable } from "@nestjs/common";
import { SaudeEntity } from "./saude.entity";


@Injectable()
export class SaudeArmazenados{
  #saude: SaudeEntity [] = [];

  AdicionarSaude(saude:SaudeEntity){
    this.#saude.push(saude);
  }

  get Saude(){
    return this.#saude;
  }
}