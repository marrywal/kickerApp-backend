import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './models/players/players.module';

@Module({
  imports: [PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
