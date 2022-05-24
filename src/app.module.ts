import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoletosModule } from './boletos/boletos.module';

@Module({
  imports: [BoletosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
