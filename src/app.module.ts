import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { User } from './user/user.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: 'schema.gpl'
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql', //Database 설정
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hinest',
      entities: ['dist/**/*.entity.{ts,js}'], // Entity 연결
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
