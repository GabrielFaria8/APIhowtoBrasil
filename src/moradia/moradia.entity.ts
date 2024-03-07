import { InteressesEntity } from "src/interesses/interesses.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MoradiaEntity extends InteressesEntity{
    endereco:string;
    linkCorrelatos: string;
    area: string;
    quartos: number;
    valor: string;
    banheiro: number;
    vagas: number;
    foto: string;

    constructor(id: string, tipos: number, nome: string,interacao:string,subInteracao:string, endereco: string, linkCorrelatos:string,area:string, quartos: number, valor: string, banheiro: number, vagas: number, foto: string,
        ){
        
        
        super(id, tipos, nome,interacao,subInteracao,null,null,null);

        this.tipos=tipos;
        this.nome = nome;
        this.interacao = interacao;
        this.subInteracao = subInteracao;
        this.area = area;
        this.quartos = quartos;
        this.valor = valor;
        this.endereco = endereco;
        this.banheiro = banheiro;
        this.vagas = vagas;
        this.foto = foto;
        this.linkCorrelatos = linkCorrelatos;
    }
    
    
  }