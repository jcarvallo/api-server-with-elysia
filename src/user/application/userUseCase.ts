import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    public async getAllUser() {
        return await this.userRepository.getAllUser()
     }
    public async getUserById(id:string) { 
        return await this.userRepository.getUserById(id)
    }
    public async addUser(data: UserEntity) {
        const userValue = new UserValue(data)
        return await this.userRepository.addUser(userValue)
    }
}