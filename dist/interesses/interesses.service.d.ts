import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import { criaInteressesDTO } from './dto/interesses.dto';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { INTERESSES } from './interesses.entity';
export declare class InteressesService {
    private interessesRepository;
    constructor(interessesRepository: Repository<INTERESSES>);
    listar(): Promise<ListaInteressesDTO[]>;
    inserir(dados: criaInteressesDTO): Promise<RetornoCadastroDTO>;
    localizarID(ID: string): Promise<INTERESSES>;
    remover(id: string): Promise<RetornoObjDTO>;
}
