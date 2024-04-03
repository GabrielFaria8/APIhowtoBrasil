import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
import { USUARIO } from './usuario.entity';
import { AlteraUsuarioDTO } from './dto/atualiza.usuario.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<USUARIO>);
    listar(): Promise<ListaUsuarioDTO[]>;
    inserir(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO>;
    remover(id: string): Promise<RetornoObjDTO>;
    alterar(id: string, dados: AlteraUsuarioDTO): Promise<RetornoCadastroDTO>;
    localizarID(id: string): Promise<USUARIO>;
    validaEmail(email: string): Promise<boolean>;
    validaLogin(email: string, senha: string): Promise<RetornoObjDTO>;
    localizarEmail(email: string): Promise<USUARIO>;
    trocaSenha(email: string, senha: string): Promise<boolean>;
}
