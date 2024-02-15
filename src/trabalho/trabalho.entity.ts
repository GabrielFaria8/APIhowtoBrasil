import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";


@Injectable()


export class TrabalhoEntity extends InteressesEntity{
    id: string;
    trabalho: string;
    PreRequisitos: string;
    SiteEmpresa: string;
    constructor(id: string,trabalho: string,PreRequisitos: string,SiteEmpresa: string){
        
      id= id
      trabalho= trabalho
      PreRequisitos= PreRequisitos
      SiteEmpresa= SiteEmpresa;

      super("","trabalhos","","","","trabalho")

    }
    
    validarUsuario(){
      var retorno = [];
      if (this.nome == ""){
          retorno.push("endereco inválido ou vazio");
      }
      if (this.Numero  == ""){
          retorno.push("Numero inválida ou vazia");
      }
      if (this.Horario == ""){
          retorno.push("Horario inválido ou vazio");
      }
      if (this.trabalho  == ""){
          retorno.push("trabalho inválido ou vazio");
      }
      if (this.LinkMaps  == ""){
        retorno.push("Link de endereço inválido ou vazio");
      }
      if (this.PreRequisitos  == ""){
        retorno.push("Pré requisitos inválido ou vazio");
      }
      if (this.SiteEmpresa  == ""){
        retorno.push("Site da empresa inválido ou vazio");
      }
      
      return retorno;
  }
  }