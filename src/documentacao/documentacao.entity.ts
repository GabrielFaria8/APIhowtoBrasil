import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";

@Injectable()

export class DocumentacaoEntity extends InteressesEntity{

  linkGoverno: string;

  constructor(linkGoverno: string,){
      

      linkGoverno = linkGoverno;


      super("","documentos","","","","documentação")
      
  }
  
  
  validarUsuario(){
    var retorno = [];
    if (this.nome == ""){
        retorno.push("nome inválido ou vazio");
    }
    if (this.endereco == ""){
        retorno.push("endereco inválido ou vazio");
    }
    if (this.Numero  == ""){
        retorno.push("Numero inválida ou vazia");
    }
    if (this.Horario == ""){
        retorno.push("Horario inválido ou vazio");
    }
    if (this.linkGoverno  == ""){
        retorno.push("documentação inválido ou vazio");
    }
    
    
    return retorno;
}
}