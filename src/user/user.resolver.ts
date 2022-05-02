import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model'

@Resolver()
export class UserResolver {
    constructor(private readonly userService : UserService){}

    @Query(result => User)
    async getUser(): Promise<any>{
        return this.userService.getHello();
    }

    @Query(result => String)
    async test(): Promise<string>{
        return '테스트가 잘 될까요?';
    }
    
}

