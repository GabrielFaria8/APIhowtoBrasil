import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { TrabalhoArmazenados } from './trabalho.dm';
  import { ListaTrabalhoDTO } from './dto/lista.trabalho.dto';
  import { TrabalhoEntity } from './trabalho.entity';
  import { v4 as uuid } from 'uuid';
  import { criaTrabalhoDTO } from './dto/trabalho.dto';
  import { AlteraTrabalhoDTO } from './dto/atualiza.trabalho.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
  
  @Controller('/trabalho')
  @ApiTags('trabalho')
  export class TrabalhoController {
    constructor(private clstrabalhoArmazenados: TrabalhoArmazenados) {}
  
    @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de trabalhos existentes.'})
    @Get()
    async Retornotrabalho() {
      const trabalhoListados = await this.clstrabalhoArmazenados.Trabalho;
      const listaRetorno = trabalhoListados.map(
        (trabalho) =>
          new ListaTrabalhoDTO(
            trabalho.id,
            trabalho.trabalho,
            trabalho.nome,
            trabalho.endereco,
            trabalho.Numero,
            trabalho.Horario,
          ),
      );
  
      return listaRetorno;
    }
    
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de trabalho.'})
      @ApiResponse({ status: 500, description: 'Retorna que o cadastro de trabalho não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
    @Delete(':id')
    async removeTrabalho(@Param('id') id: string) {
      const trabalhoRemovido = await this.clstrabalhoArmazenados.removeTrabalho(id);
  
      return {
        usuario : trabalhoRemovido,
        message: 'Usuário removido',
      }
    }
  
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de trabalho.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro de trabalho não foi encontrado ou ocorreu um erro interno.'})
    @Put('/:id')
    async atualizaTrabalho(
      @Param('id') id: string,
      @Body()  novosDados: AlteraTrabalhoDTO,
    ){
      const trabalhoAtualizado = await this.clstrabalhoArmazenados.atualizaTrabalho(
        id,
        novosDados,
      );
      return{
        Trabalho: trabalhoAtualizado,
        message: 'Usuário atualizado',
      };
    }
  
    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar informações de trabalho e inclui o ID criado.'})
    @Post()
    async criaTrabalho(@Body() dadosTrabalho: criaTrabalhoDTO) {
      var trabalho = new TrabalhoEntity(
        uuid(),
        dadosTrabalho.trabalho,
        dadosTrabalho.nome,
        dadosTrabalho.endereco,
        dadosTrabalho.Numero,
        dadosTrabalho.Horario,
      );
      this.clstrabalhoArmazenados.AdicionarTrabalho(trabalho);
      var retorno = {
        id: trabalho.id,
        message: 'Usuário Criado',
      };
      return retorno;
    }
  }
  