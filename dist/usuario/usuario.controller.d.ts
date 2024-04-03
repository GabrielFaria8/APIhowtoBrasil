import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { UsuarioService } from './usuario.service';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
import { AlteraUsuarioDTO } from './dto/atualiza.usuario.dto';
import { LoginUsuarioDTO } from './dto/login.usuario.dto';
import { atualizaSenhaDTO } from './dto/atualiza.senha.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    Retorno(): Promise<ListaUsuarioDTO[]>;
    remove(id: string): Promise<RetornoObjDTO>;
    atualiza(id: string, novosDados: AlteraUsuarioDTO): Promise<RetornoCadastroDTO>;
    cria(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO>;
    Login(dadosUsuario: LoginUsuarioDTO): Promise<RetornoObjDTO>;
    trocaSenha(dadosTrocaSenha: atualizaSenhaDTO): Promise<{
        message: string;
    }>;
}
