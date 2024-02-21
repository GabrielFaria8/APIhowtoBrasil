import { InteressesEntity } from "src/interesses/interesses.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MoradiaEntity extends InteressesEntity{
    moradia: string;
    linkGoverno: string;
    linkCorrelatos: string;
    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string, moradia:      string,linkGoverno: string, linkCorrelatos:string){
        super(id, tipos, nome, Numero, Horario, LinkMaps);

  
        this.moradia = moradia;
        this.linkGoverno = linkGoverno;
        this.linkCorrelatos = linkCorrelatos;
    }
    
    
  }