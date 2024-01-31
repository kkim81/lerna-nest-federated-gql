import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
    driver: ApolloGatewayDriver,
    server: {
      // ... Apollo server options
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        pollIntervalInMs: 3000,
        subgraphs: [
          { name: 'players', url: 'http://localhost:3001/graphql' },
          { name: 'teams', url: 'http://localhost:3002/graphql' },
        ],
      }),
    },
  }),
  ],
})
export class AppModule { }
