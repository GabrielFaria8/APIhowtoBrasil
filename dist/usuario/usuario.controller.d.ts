import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { UsuarioService } from './usuario.service';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    Retorno(): Promise<ListaUsuarioDTO[]>;
    remove(id: string): Promise<RetornoObjDTO>;
    cria(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO>;
}
