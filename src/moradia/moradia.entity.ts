import { InteressesEntity } from "src/interesses/interesses.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MoradiaEntity extends InteressesEntity{
    moradia: string;
    linkCorrelatos: string;
    area: number;
    quartos: number;
    valor: number;
    banheiro: number;
    vagas: number;
    foto: string;

    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string, moradia: string, linkCorrelatos:string,
        area:number, quartos: number, valor: number, banheiro: number, vagas: number, foto: string){
        
        
        super(id, tipos, nome, Numero, Horario, LinkMaps);

  
        this.moradia = moradia;
        this.linkCorrelatos = linkCorrelatos;
        this.area = area;
        this.quartos = quartos;
        this.valor = valor;
        this.banheiro = banheiro;
        this.vagas = vagas;
        this.foto = foto;
    }
    
    
  }