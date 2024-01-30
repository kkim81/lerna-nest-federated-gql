import { Module } from '@nestjs/common';
import { TeamsResolver } from './teams/teams.resolver';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import {TeamsService} from "./teams/teams.service";


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,

      autoSchemaFile: { federation: 2},
    }),
  ],
  providers: [TeamsResolver, TeamsService],
})
export class AppModule {}
