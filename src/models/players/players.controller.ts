import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body(new ValidationPipe()) player: CreatePlayerDto) {
    return this.playersService.create(player);
  }

  @Get()
  async findAll(@Req() request: Request): Promise<CreatePlayerDto[]> {
    console.log(request);
    return this.playersService.findAll();
  }


  

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.remove(id);
  }
}


// TODO: add guardsß AuthGuard with key, RoleGurad for UserRoles