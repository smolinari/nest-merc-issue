import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      useFactory: () => {
        return {
          autoSchemaFile: true,
          jit: 5,
          context: (request, reply) => ({ req: request, res: reply })
        }
      }
    }),
  ],
})
export class AppModule {}
