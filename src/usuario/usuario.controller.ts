import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { criaUsuarioDTO } from './dto/usuario.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
  import { UsuarioEntity } from './usuario.entity';
  import { UsuariosArmazenados } from './usuario.dm';
  import { v4 as uuid } from 'uuid';
  import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
  import { AlteraUsuarioDTO } from './dto/atualizaUsuario.dto';
  import { Injectable } from '@nestjs/common';
  import { LoginUsuarioDTO } from './dto/loginUsuario.dto';
  
  @Controller('/usuarios')
  @ApiTags('usuario')
  export class UsuarioController {
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados) {}

    @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros do usuario existentes.'})
    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.ultimoNome,
                usuario.statusMigratorio,
                usuario.interesses,
                usuario.email,
                usuario.senha,
                usuario.foto
            )
        );
        
        return listaRetorno;
    }
  
    @Post('/login')
    async Login(@Body() dadosUsuario: LoginUsuarioDTO) {
      var login = this.clsUsuariosArmazenados.validarLogin(
        dadosUsuario.email,
        dadosUsuario.senha, 
      );
      return {
        usuario: login[1] ? login[0] : null,
        status: login[1],
        message: login[1] ? 'Login Efetuado' : 'Usuario ou senha inválidos',
      };
    }

    @Post('/troca-senha')
    async trocaSenha(@Body() dadosUsuario: { email: string, senha: string }) {
      const { email, senha } = dadosUsuario;
  
      const senhaTrocadaComSucesso = await this.clsUsuariosArmazenados.trocaSenha(email, senha);
  
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




    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de usuario.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro do usuario não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
      const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id);
  
      return {
        usuario: usuarioRemovido,
        message: 'Usuário removido',
      };
    }


    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro do usuario.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro do usuario não foi encontrado ou ocorreu um erro interno.'})
    @Put('/:id')
    async atualizaUsuario(
      @Param('id') id: string,
      @Body() novosDados: AlteraUsuarioDTO,
    ) {
      const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUSuario(
        id,
        novosDados,
      );
  
      return {
        usuario: usuarioAtualizado,
        message: 'Usuário atualizado',
      };
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao trocar a foto.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    @Post('/foto/:id')
    async atualizaFoto(@Param('id') id: string,@Body() AlteraFotoUsuarioDTO){
        const usuario = await this.clsUsuariosArmazenados.atualizaUSuario(id,AlteraFotoUsuarioDTO)

        return{
            usuario: usuario            
        }
    }
    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar usuario e inclui o ID criado.'})
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {
      var usuario = new UsuarioEntity(
        uuid(),
        dadosUsuario.nome,
        dadosUsuario.ultimoNome,
        dadosUsuario.statusMigratorio,
        dadosUsuario.interesses,
        dadosUsuario.email,
        dadosUsuario.senha,
        dadosUsuario.foto
      );
  
      this.clsUsuariosArmazenados.AdicionarUsuario(usuario);
      var retorno = {
        id: usuario.id,
        message: 'Usuário Criado',
      };
  
      return retorno;
    }
  }
  