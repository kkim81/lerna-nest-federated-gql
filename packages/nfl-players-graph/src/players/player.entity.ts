import {Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Player {
  @Field() 
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  test: string

  @Field(type => Int)
  jerseyNumber: number;
}
