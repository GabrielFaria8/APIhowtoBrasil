import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { EducacaoArmazenados } from './educacao.dm';
  import { ListaEducacaoDTO } from './dto/lista.educacao.dto';
  import { EducacaoEntity } from './educacao.entity';
  import { v4 as uuid } from 'uuid';
  import { criaEducacaoDTO } from './dto/educacao.dto';
  import { AlteraEducacaoDTO } from './dto/atualiza.educacao.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
  
  @Controller('/educacao')
  @ApiTags('educacao')
  export class EducacaoController {
    constructor(private clseducacaoArmazenados: EducacaoArmazenados) {}
  
    @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de educação existentes.'})
    @Get()
    async Retornoeducacao() {
      const educacaoListados = await this.clseducacaoArmazenados.Educacao;
      const listaRetorno = educacaoListados.map(
        (educacao) =>
          new ListaEducacaoDTO(
            educacao.id,
            educacao.educacao,
            educacao.nome,
            educacao.endereco,
            educacao.Numero,
            educacao.Horario,
          ),
      );
  
      return listaRetorno;
    }
    
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de educação.'})
      @ApiResponse({ status: 500, description: 'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
    @Delete(':id')
    async removeEducacao(@Param('id') id: string) {
      const educacaoRemovido = await this.clseducacaoArmazenados.removeEducacao(id);
  
      return {
        usuario : educacaoRemovido,
        message: 'Usuário removido',
      }
    }
  
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de educação.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno.'})
    @Put('/:id')
    async atualizaEducacao(
      @Param('id') id: string,
      @Body()  novosDadados: AlteraEducacaoDTO,
    ){
      const educacaoAtualizado = await this.clseducacaoArmazenados.atualizaEducacao(
        id,
        novosDadados,
      );
      return{
        Educacao: educacaoAtualizado,
        message: 'Usuário atualizado',
      };
    }
  
    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar informações de educação e inclui o ID criado.'})
    @Post()
    async criaEducacao(@Body() dadosEducacao: criaEducacaoDTO) {
      var educacao = new EducacaoEntity(
        uuid(),
        dadosEducacao.educacao,
        dadosEducacao.nome,
        dadosEducacao.endereco,
        dadosEducacao.Numero,
        dadosEducacao.Horario,
      );
      this.clseducacaoArmazenados.AdicionarEducacao(educacao);
      var retorno = {
        id: educacao.id,
        message: 'Usuário Criado',
      };
      return retorno;
    }
  }
  