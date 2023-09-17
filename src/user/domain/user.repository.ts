import { UserEntity } from "./user.entity"

export interface UserRepository {
    getAllUser(): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity[] | null>;
    addUser({ email, lastname, name }: UserEntity): Promise<UserEntity | null>;
}