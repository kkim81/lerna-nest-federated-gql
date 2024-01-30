import {Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Team {
  @Field() 
  teamName: string;

  @Field()
  teamCity: string;
  
  @Field(type => Int)
  teamId: number;
}
