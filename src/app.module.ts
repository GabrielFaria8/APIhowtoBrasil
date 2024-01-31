import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { SaudeModule } from './saude/saude.module';
import { TrabalhoModule } from './trabalho/trabalho.module';



@Module({
  imports: [UsuarioModule,SaudeModule,TrabalhoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
