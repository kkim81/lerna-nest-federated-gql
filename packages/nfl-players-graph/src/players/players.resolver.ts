import { Resolver, Query } from '@nestjs/graphql';
import { PlayersService } from "./players.service";
import { Player } from "./player.entity"
@Resolver()
export class PlayersResolver {
  constructor(private playersService: PlayersService) { }

  @Query(returns => [Player])
  players(): Promise<Player[]> {
    return this.playersService.findAll();
  }
}
