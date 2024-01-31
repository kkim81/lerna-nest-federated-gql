import { Injectable } from '@nestjs/common';
import { Team } from "./team.entity"
@Injectable()
export class TeamsService {
  async findAll(): Promise<Team[]> {
    const team = new Team();
    team.teamCity = "Los Angeles"
    team.teamName = "Rams"
    team.teamId = 1
    return [team]
  }
  async findTeamById(id: number): Promise<Team> {
    const team = new Team();
    team.teamCity = "Baltimore"
    team.teamName = "Ravens"
    team.teamId = 1
    console.log("this is from the entity teams", id)
    return team
  }


}
