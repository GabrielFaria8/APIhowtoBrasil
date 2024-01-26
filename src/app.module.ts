import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { SaudeModule } from './saude/saude.module';



@Module({
  imports: [UsuarioModule,SaudeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
