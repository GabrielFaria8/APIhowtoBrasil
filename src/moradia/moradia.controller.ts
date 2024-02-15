import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { MoradiaArmazenados } from './moradia.dm';
  import { ListaMoradiaDTO } from './dto/lista.moradia.dto';
  import { MoradiaEntity } from './moradia.entity';
  import { v4 as uuid } from 'uuid';
  import { criaMoradiaDTO } from './dto/moradia.dto';
  import { AlteraMoradiaDTO } from './dto/atualiza.moradia.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
  
  @Controller('/moradia')
  @ApiTags('moradia')
  export class MoradiaController {
    constructor(private clsmoradiaArmazenados: MoradiaArmazenados) {}
  
    @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de moradia existentes.'})
    @Get()
    async Retornomoradia() {
      const moradiaListados = await this.clsmoradiaArmazenados.Moradia;
      const listaRetorno = moradiaListados.map(
        (moradia) =>
          new ListaEducacaoDTO(
            educacao.id,
            educacao.linkGoverno,
            educacao.linkGoverno,
           
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
  