import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SaudeArmazenados } from './saude.dm';
import { ListaSaudeDTO } from './dto/lista.saude.dto';
import { SaudeEntity } from './saude.entity';
import { v4 as uuid } from 'uuid';
import { criaSaudeDTO } from './dto/saude.dto';
import { AleteraSaudeDTO } from './dto/atualiza.saude.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/saude')
@ApiTags('saude')
export class SaudeController {
  constructor(private clssaudeArmazenados: SaudeArmazenados) {}

  @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de saúde existentes.'})
  @Get()
  async Retornosaude() {
    const saudeListados = await this.clssaudeArmazenados.Saude;
    const listaRetorno = saudeListados.map(
      (saude) =>
        new ListaSaudeDTO(
          saude.id,
          saude.saude,
          saude.nome,
          saude.endereco,
          saude.Numero,
          saude.Horario,
        ),
    );

    return listaRetorno;
  }
  
  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de saúde.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro de saúde não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
  @Delete(':id')
  async removeSaude(@Param('id') id: string) {
    const saudeRemovido = await this.clssaudeArmazenados.removeSaude(id);

    return {
      usuario : saudeRemovido,
      message: 'Usuário removido',
    }
  }

  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de saúde.'})
  @ApiResponse({ status: 500, description: 'Retorna que o cadastro de saúde não foi encontrado ou ocorreu um erro interno.'})
  @Put('/:id')
  async atualizaSaude(
    @Param('id') id: string,
    @Body()  novosDadados: AleteraSaudeDTO,
  ){
    const saudeAtualizado = await this.clssaudeArmazenados.atualizaSaude(
      id,
      novosDadados,
    );
    return{
      Saude: saudeAtualizado,
      message: 'Usuário atualizado',
    };
  }

  @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar informações de saúde e inclui o ID criado.'})
  @Post()
  async criaSaude(@Body() dadosSaude: criaSaudeDTO) {
    var saude = new SaudeEntity(
      uuid(),
      dadosSaude.saude,
      dadosSaude.nome,
      dadosSaude.endereco,
      dadosSaude.Numero,
      dadosSaude.Horario,
    );
    this.clssaudeArmazenados.AdicionarSaude(saude);
    var retorno = {
      id: saude.id,
      message: 'Usuário Criado',
    };
    return retorno;
  }
}
