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

}
