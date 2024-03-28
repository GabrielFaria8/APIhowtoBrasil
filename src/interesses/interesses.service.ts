import { Injectable, Inject } from '@nestjs/common';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import {v4  as uuid} from 'uuid'
import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
import { criaInteressesDTO } from './dto/interesses.dto';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { INTERESSES } from './interesses.entity';



@Injectable()
export class InteressesService {
  constructor(
    @Inject('INTERESSES_REPOSITORY')
    private interessesRepository: Repository<INTERESSES>,
    
  ) {}

  async listar(): Promise<ListaInteressesDTO[]> {
    var interessesListados = await this.interessesRepository.find();
    return interessesListados.map(
      interesses => new ListaInteressesDTO(
          interesses.ID,
          interesses.TIPOS,
          interesses.NOME,
          interesses.NUMERO,
          interesses.HORARIO,
          interesses.LINKMAPS,
          interesses.TRABALHO,
          interesses.PREREQUISITOS,
          interesses.SITEEMPRESA,
          interesses.SALARIO,
          interesses.DESCRICAO,
          interesses.FOTO
      ))
        
  }


  async inserir(dados: criaInteressesDTO): Promise<RetornoCadastroDTO>{
    let interesses = new INTERESSES();
        interesses.ID = uuid();
        interesses.TIPOS = dados.TIPOS;
        interesses.NOME = dados.NOME;
        interesses.NUMERO = dados.NUMERO;
        interesses.HORARIO = dados.HORARIO;
        interesses.LINKMAPS = dados.LINKMAPS;
        interesses.TRABALHO = dados.TRABALHO;
        interesses.PREREQUISITOS = dados.PREREQUISITOS;
        interesses.SITEEMPRESA = dados.SITEEMPRESA;
        interesses.SALARIO = dados.SALARIO;
        interesses.DESCRICAO = dados.DESCRICAO;
        interesses.FOTO = dados.FOTO;
        // interesses.files = await this.filesService.localizarID(dados.FILES);

    return this.interessesRepository.save(interesses)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: interesses.ID,
        message: "Interesse cadastrado!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao cadastrar." + error.message
      };
    })

    
  }

  localizarID(ID: string): Promise<INTERESSES> {
    return this.interessesRepository.findOne({
      where: {
        ID,
      },
    });
  }


  async remover(id: string): Promise<RetornoObjDTO> {
    const interesses = await this.localizarID(id);
    
    return this.interessesRepository.remove(interesses)
    .then((result) => {
      return <RetornoObjDTO>{
        return: interesses,
        message: "Interesse excluido!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: interesses,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  

  // async alterar(id: string, dados: AlteraInteressesDTO): Promise<RetornoCadastroDTO> {
  //   const interesses = await this.localizarID(id);

  //   Object.entries(dados).forEach(
  //     async ([chave, valor]) => {
  //         if(chave=== 'id'){
  //             return;
  //         }

  //         if(chave=== 'FILES'){
  //           interesses['FILES'] = await this.filesService.localizarNome(valor);
  //           return;
  //          }

  //         if (valor) 
  //         interesses[chave] = valor;
          
  //     }
  //   )

  //   return this.interessesRepository.save(interesses)
  //   .then((result) => {
  //     return <RetornoCadastroDTO>{
  //       id: interesses.ID,
  //       message: "Interesse alterado!"
  //     };
  //   })
  //   .catch((error) => {
  //     return <RetornoCadastroDTO>{
  //       id: "",
  //       message: "Houve um erro ao alterar." + error.message
  //     };
  //   });
  // }
}