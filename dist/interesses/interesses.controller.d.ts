import { InteressesService } from './interesses.service';
import { ListaInteressesDTO } from './dto/lista.interesses.dto';
import { criaInteressesDTO } from './dto/interesses.dto';
import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
export declare class InteressesController {
    private readonly interessesService;
    constructor(interessesService: InteressesService);
    Retorno(): Promise<ListaInteressesDTO[]>;
    tipo(tipos: number): Promise<ListaInteressesDTO[]>;
    remove(id: string): Promise<RetornoObjDTO>;
    atualiza(id: string, novosDados: AlteraInteressesDTO): Promise<RetornoCadastroDTO>;
    cria(dados: criaInteressesDTO): Promise<RetornoCadastroDTO>;
}
