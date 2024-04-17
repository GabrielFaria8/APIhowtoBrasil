import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { v4 as uuid } from 'uuid';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { UsuarioService } from './usuario.service';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
import { AlteraUsuarioDTO } from './dto/atualiza.usuario.dto';
import { get } from 'http';
import { LoginUsuarioDTO } from './dto/login.usuario.dto';
import { atualizaSenhaDTO } from './dto/atualiza.senha.dto';
  
  @ApiTags('usuario')
@Controller('/usuario')
export class UsuarioController{    
    constructor(private readonly usuarioService: UsuarioService){
    }
    @ApiResponse({ status: 200, description: 'Retorna os usuários cadastrados.'})
    @Get()
    async Retorno():Promise<ListaUsuarioDTO[]> {
        return this.usuarioService.listar();
    }

    @ApiCreatedResponse({ status: 200, description: 'Retorna que houve sucesso ao remover o usuário.'})
    @Delete('/:id')
    async remove(@Param('id') id: string): Promise<RetornoObjDTO>{
        return this.usuarioService.remover(id);
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AlteraUsuarioDTO):Promise<RetornoCadastroDTO>{
        return this.usuarioService.alterar(id, novosDados);
    }

    @ApiCreatedResponse({ status: 200, description: 'Retorna que houve sucesso ao cadastrar o usuário e retorna o ID criado.'})
    @Post()
    async cria(@Body() dados: criaUsuarioDTO):Promise<RetornoCadastroDTO>{
        return this.usuarioService.inserir(dados);        
    }

    @ApiResponse({ status: 200, description: 'Retorna se houve sucesso no login. O retorno "Status" diz se houve sucesso ou não.'})
    @Post('/login')
    async Login(@Body() dadosUsuario: LoginUsuarioDTO): Promise<RetornoObjDTO>{
        return this.usuarioService.validaLogin( 
          dadosUsuario.email,
          dadosUsuario.senha,
          dadosUsuario.nome,
          dadosUsuario.ultimoNome)
    }

    @Post('/troca-senha')
    async trocaSenha(@Body() dadosTrocaSenha: atualizaSenhaDTO) {
    
      const senhaTrocadaComSucesso = await this.usuarioService.trocaSenha(
        dadosTrocaSenha.email,
        dadosTrocaSenha.senha,
      );
      
    
      if (senhaTrocadaComSucesso) {
        return {
          message: 'Senha atualizada com sucesso!'
        };
      } else {
        return {
          message: 'O email fornecido não foi encontrado.'
        };
      }
    
    

  
}
}