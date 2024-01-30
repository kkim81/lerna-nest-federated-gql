import { Injectable } from '@nestjs/common';
import { Player } from "./player.entity"
@Injectable()
export class PlayersService {
  async findAll(): Promise<Player[]> {
    const player = new Player();
    player.lastName = "Matthew"
    player.firstName = "Stafford"
    player.jerseyNumber = 9
    return [player]
  }

}
