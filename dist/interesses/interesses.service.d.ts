import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
import { criaInteressesDTO } from './dto/interesses.dto';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { INTERESSES } from './interesses.entity';
export declare class InteressesService {
    private interessesRepository;
    constructor(interessesRepository: Repository<INTERESSES>);
    listar(): Promise<ListaInteressesDTO[]>;
    inserir(dados: criaInteressesDTO): Promise<RetornoCadastroDTO>;
    localizarID(id: string): Promise<INTERESSES>;
    localizarTipo(tipos: number): Promise<ListaInteressesDTO[]>;
    remover(id: string): Promise<RetornoObjDTO>;
    alterar(id: string, dados: AlteraInteressesDTO): Promise<RetornoCadastroDTO>;
}
