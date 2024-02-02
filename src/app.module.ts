import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { SaudeModule } from './saude/saude.module';
import { FilesModule } from './files/files.modulo';



@Module({
  imports: [UsuarioModule,SaudeModule,FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
