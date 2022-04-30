import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getHello(): string{
        return 'You can get user';
    }
}
