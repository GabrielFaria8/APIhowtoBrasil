import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { UsuarioService } from './usuario.service';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
import { AlteraUsuarioDTO } from './dto/atualiza.usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    Retorno(): Promise<ListaUsuarioDTO[]>;
    remove(id: string): Promise<RetornoObjDTO>;
    atualiza(id: string, novosDados: AlteraUsuarioDTO): Promise<RetornoCadastroDTO>;
    cria(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO>;
}
