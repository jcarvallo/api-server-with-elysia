import { User } from "../models/user.model"
import { userService } from "../services/user.service"

const userController = {
    getUser: async (req: any): Promise<User> => userService.getUser(req),
    addUser: async (data: User): Promise<any> => userService.addUser(data)
}

export { userController }