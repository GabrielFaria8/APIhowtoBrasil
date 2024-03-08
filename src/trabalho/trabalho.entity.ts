import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";


@Injectable()


export class TrabalhoEntity extends InteressesEntity{
    trabalho: string;
    preRequisitos: string;
    siteEmpresa: string;
    salario:string;
    descricao: string;
    foto: string
    constructor(id: string, nome: string, trabalho: string,
    preRequisitos: string, siteEmpresa: string ,salario:string, descricao: string, foto: string,interacao: string,subInteracao: string){

      super(id, null, nome,interacao,subInteracao, null, null, null);
        
        this.trabalho = trabalho;
        this.preRequisitos = preRequisitos;
        this.siteEmpresa = siteEmpresa;
        this.salario = salario;
        this.descricao = descricao;
        this.foto = foto;
        this.interacao = interacao;
        this.subInteracao = subInteracao;


    }
    
    
  }