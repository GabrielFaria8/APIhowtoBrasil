import { Module } from '@nestjs/common';
import { InteressesModule } from './interesses/interesses.module';

@Module({
  imports: [InteressesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
