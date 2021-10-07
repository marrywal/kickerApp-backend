import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  private readonly players: CreatePlayerDto[] = [];

  create(player: CreatePlayerDto) {
    this.players.push(player);
  }

  findAll(): CreatePlayerDto[] {
    // return this.players;
    return [
      {
          id: 1,
          name: 'Test Name',
          city: 'Muc'
      },
      {
        id: 2,
        name: 'Test Name 2',
        city: 'Muc2'
    },
  ];
  }


  

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
