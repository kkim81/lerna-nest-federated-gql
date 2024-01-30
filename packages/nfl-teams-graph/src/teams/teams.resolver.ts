import { Resolver, Query } from '@nestjs/graphql';
import { TeamsService } from "./teams.service"
import { Team } from "./team.entity"

@Resolver()
export class TeamsResolver {
  constructor(private teamsService: TeamsService) { }

  @Query(returns => [Team])
  teams(): Promise<Team[]> {
    return this.teamsService.findAll();
  }
}


