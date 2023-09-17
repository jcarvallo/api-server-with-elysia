import { UserUseCase } from "../../application/userUseCase";
import { User } from "../models/user.model"

export class UserController {
    constructor(private userUseCase: UserUseCase) {
        this.getAllUser = this.getAllUser.bind(this)
        this.getUserById = this.getUserById.bind(this)
        this.addUser = this.addUser.bind(this)
    }
    async getUserById(id: string ) {
        return await this.userUseCase.getUserById(id)
    }
    async getAllUser() {
        return await this.userUseCase.getAllUser()
    }
    async addUser(data: User) {
        return await this.userUseCase.addUser(data)
    }

}