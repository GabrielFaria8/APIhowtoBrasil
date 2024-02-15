import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";


@Injectable()


export class TrabalhoEntity extends InteressesEntity{
    trabalho: string;
    PreRequisitos: string;
    SiteEmpresa: string;
    constructor(id: string, tipos: string, nome: string, Numero: string, Horario: string, LinkMaps: string, trabalho: string, PreRequisitos: string, SiteEmpresa:string){
      super(id, tipos, nome, Numero, Horario, LinkMaps);
        
      this.trabalho = trabalho;
        this.PreRequisitos = PreRequisitos;
        this.SiteEmpresa = SiteEmpresa;

    }
    
    
  }