import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //Database 설정
      host: '127.0.0.1', // localhost에서 127.0.0.1로 바꾸니까 서버 실행됌
      port: 3306,
      username: 'root',
      password: "",
      database: 'hinest',
      entities: [User], // Entity 연결
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: 'schema.gpl'
    }),
    UserModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
