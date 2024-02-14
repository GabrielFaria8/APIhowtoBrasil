import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DocumentacaoArmazenados } from './documentacao.dm';
import { ListaDocumentacaoDTO } from './dto/lista.documentacao.dto';
import { DocumentacaoEntity } from './documentacao.entity';
import { v4 as uuid } from 'uuid';
import { criaDocumentacaoDTO } from './dto/documentacao.dto';
import { AlteraDocumentacaoDTO } from './dto/atualiza.documentacao.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/documentacao')
@ApiTags('documentacao')
export class DocumentacaoController {
  constructor(private clsdocumentacaoArmazenados: DocumentacaoArmazenados) {}

  @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de documentações existentes.'})
  @Get()
  async Retornodocumentacao() {
    const documentacaoListados = await this.clsdocumentacaoArmazenados.Documentacao;
    const listaRetorno = documentacaoListados.map(
      (documentacao) =>
        new ListaDocumentacaoDTO(
          documentacao.id,
          documentacao.linkGoverno,
          documentacao.linkGoverno,
          
        ),
    );

    return listaRetorno;
  }
  
  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de documentação.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
  @Delete(':id')
  async removeDocumentacao(@Param('id') id: string) {
    const documentacaoRemovido = await this.clsdocumentacaoArmazenados.removeDocumentacao(id);

    return {
      usuario : documentacaoRemovido,
      message: 'Usuário removido',
    }
  }

  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de documentação.'})
  @ApiResponse({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno.'})
  @Put('/:id')
  async atualizaDocumentacao(
    @Param('id') id: string,
    @Body()  novosDadados: AlteraDocumentacaoDTO,
  ){
    const documentacaoAtualizado = await this.clsdocumentacaoArmazenados.atualizaDocumentacao(
      id,
      novosDadados,
    );
    return{
      Documentacao: documentacaoAtualizado,
      message: 'Usuário atualizado',
    };
  }

  @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar informações de documentação e inclui o ID criado.'})
  @Post()
  async criaDocumentacao(@Body() dadosDocumentacao: criaDocumentacaoDTO) {
    var documentacao = new DocumentacaoEntity(
      uuid(),
      dadosDocumentacao.documentacao,
      dadosDocumentacao.linkGoverno,
      
    );
    this.clsdocumentacaoArmazenados.AdicionarDocumentacao(documentacao);
    var retorno = {
      id: documentacao.id,
      message: 'Usuário Criado',
    };
    return retorno;
  }
}
