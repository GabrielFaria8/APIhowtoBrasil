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

@Controller('/saude')
export class SaudeController {
  constructor(private clssaudeArmazenados: SaudeArmazenados) {}
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
