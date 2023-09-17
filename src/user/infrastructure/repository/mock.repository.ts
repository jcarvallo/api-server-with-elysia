import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import user from '../../../mocks/user.json'

export class MockRepository implements UserRepository {
    async getUserById(id: string): Promise<any> {
        return user[0]
    }
    async getAllUser(): Promise<any> {
        return user
    }
    async addUser({ email, lastname, name }: UserEntity): Promise<UserEntity | null> {
        const user = { email, lastname, name }
        return user

    }
}