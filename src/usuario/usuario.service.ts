import { Injectable, Inject } from '@nestjs/common';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import {v4  as uuid} from 'uuid'
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
import { USUARIO } from './usuario.entity';
import { getRepository } from "typeorm";



@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<USUARIO>,
    
  ) {}

  async listar(): Promise<ListaUsuarioDTO[]> {
    var usuarioListados = await this.usuarioRepository.find();
    return usuarioListados.map(
      usuario => new ListaUsuarioDTO(
          usuario.id,
          usuario.nome,
          usuario.ultimoNome,
          usuario.statusMigratorio,
          usuario.interesses,
          usuario.email,
          usuario.senha,
          usuario.foto,
      ))
        
  }


  async inserir(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO>{
    let usuario = new USUARIO();
        usuario.id = uuid();
        usuario.nome = dados.nome;
        usuario.ultimoNome = dados.ultimoNome;
        usuario.statusMigratorio = dados.statusMigratorio;
        usuario.interesses = dados.interesses;
        usuario.email = dados.email;
        usuario.senha = dados.senha;
        usuario.foto = dados.foto;
        // interesses.files = await this.filesService.localizarID(dados.FILES);

    return this.usuarioRepository.save(usuario)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: usuario.id,
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

  localizarID(id: string): Promise<USUARIO> {
    return this.usuarioRepository.findOne({
      where: {
        id,
      },
    });
  }


  async remover(id: string): Promise<RetornoObjDTO> {
    const usuario = await this.localizarID(id);
    
    return this.usuarioRepository.remove(usuario)
    .then((result) => {
      return <RetornoObjDTO>{
        return: usuario,
        message: "Interesse excluido!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: usuario,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
    
  }

  async validaEmail(email: string){
    
    // const possivelUsuario =  await usuarioRepository.findOne({
    //   where: { email: email }
    // });

    const possivelUsuario = this.usuarioRepository.findOne({
        where: {
            email: email,
        },
      });
    return possivelUsuario !== undefined;;
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