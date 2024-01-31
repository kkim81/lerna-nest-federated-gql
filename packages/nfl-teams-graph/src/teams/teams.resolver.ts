import { Resolver, Query, Args, Int} from '@nestjs/graphql';
import { TeamsService } from "./teams.service"
import { Team } from "./team.entity"

@Resolver()
export class TeamsResolver {
  constructor(private teamsService: TeamsService) { }

  @Query(returns => [Team])
  teams(): Promise<Team[]> {
    return this.teamsService.findAll();
  }
  @Query(returns => Team)
  teamById(@Args('id', { type: () => Int }) id: number): Promise<Team> {
    return this.teamsService.findTeamById(id);
  }
}


