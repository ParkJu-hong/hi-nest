import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService : UserService){}

    @Query(returns => String)
    async getUsers(): Promise<string>{
        return this.userService.getHello();
    }
    
}

