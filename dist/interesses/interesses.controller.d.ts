import { InteressesService } from './interesses.service';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { criaInteressesDTO } from './dto/interesses.dto';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
export declare class InteressesController {
    private readonly interessesService;
    constructor(interessesService: InteressesService);
    Retorno(): Promise<ListaInteressesDTO[]>;
    tipo(tipos: number): Promise<ListaInteressesDTO[]>;
    remove(id: string): Promise<RetornoObjDTO>;
    cria(dados: criaInteressesDTO): Promise<RetornoCadastroDTO>;
}
