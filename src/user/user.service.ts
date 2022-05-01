import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async getHello(): Promise<any> {
        console.log("this.userRepository.find() : ", await this.userRepository.find()[0]);
        const result = await this.userRepository.find();
        return result[0];
    }
}
