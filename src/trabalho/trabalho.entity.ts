import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";


@Injectable()


export class TrabalhoEntity extends InteressesEntity{
    trabalho: string;
    preRequisitos: string;
    siteEmpresa: string;
    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string, trabalho: string,
    preRequisitos: string, siteEmpresa: string){

      super(id, tipos, nome, Numero, Horario, LinkMaps);
        
        this.trabalho = trabalho;
        this.preRequisitos = preRequisitos;
        this.siteEmpresa = siteEmpresa;

    }
    
    
  }