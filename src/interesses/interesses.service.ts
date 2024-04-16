import { Injectable, Inject } from '@nestjs/common';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import {v4  as uuid} from 'uuid'
import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
import { criaInteressesDTO } from './dto/interesses.dto';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { INTERESSES } from './interesses.entity';
import { filesService } from 'src/files/files.service';



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
          interesses.id,
          interesses.tipos,
          interesses.nome,
          interesses.numero,
          interesses.horario,
          interesses.linkMaps,
          interesses.trabalho,
          interesses.preRequisitos,
          interesses.siteEmpresa,
          interesses.salario,
          interesses.descricao,
          interesses.documento,
          interesses.linkGoverno,
          interesses.moradia,
          interesses.linkCorrelato,
          interesses.area,
          interesses.quartos,
          interesses.valor,
          interesses.banheiro,
          interesses.vagas
      ))
        
  }


  async inserir(dados: criaInteressesDTO): Promise<RetornoCadastroDTO>{
    let interesses = new INTERESSES();
        interesses.id = uuid();
        interesses.tipos = dados.tipos;
        interesses.nome = dados.nome;
        interesses.numero = dados.numero;
        interesses.horario = dados.horario;
        interesses.linkMaps = dados.linkMaps;
        interesses.trabalho = dados.trabalho;
        interesses.preRequisitos = dados.preRequisitos;
        interesses.siteEmpresa = dados.siteEmpresa;
        interesses.salario = dados.salario;
        interesses.descricao = dados.descricao;
        interesses.documento = dados.documento;
        interesses.linkGoverno = dados.linkGoverno
        interesses.moradia = dados.moradia
        interesses.linkCorrelato = dados.linkCorrelato
        interesses.area = dados.area
        interesses.quartos = dados.quartos
        interesses.valor = dados.valor
        interesses.banheiro = dados.banheiro
        interesses.vagas = dados.vagas
      //  interesses.files = await this.filesService.localizarNome(dados.files);
        

    return this.interessesRepository.save(interesses)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: interesses.id,
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

  localizarID(id: string): Promise<INTERESSES> {
    return this.interessesRepository.findOne({
      where: {
        id,
      },
    });
  }

  localizarTipo(tipos: number): Promise<ListaInteressesDTO[]> {
    return this.interessesRepository.find({
      where: {
        tipos,
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

  

  async alterar(id: string, dados: AlteraInteressesDTO): Promise<RetornoCadastroDTO> {
    const interesse = await this.localizarID(id);

    Object.entries(dados).forEach(
        async ([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            interesse[chave] = valor;
        }
    )

    return this.interessesRepository.save(interesse)
        .then((result) => {
            return <RetornoCadastroDTO>{
                id: interesse.id,
                message: "interesse alterado !"
            };
        })
        .catch((error) => {
            return <RetornoCadastroDTO>{
                id: "",
                message: "Houve um erro ao alterar." + error.message
            };
        });
}
}
