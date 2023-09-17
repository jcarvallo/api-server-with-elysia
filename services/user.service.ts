import { User } from "../models/user.model"

const userService = {
    getUser: async (req: any): Promise<User> => {
        const user = {
            email: 'jcarvallo@gmail.com',
            name: 'Jose',
            lastName: 'Carvallo'
        }
        return user
    },
    addUser: async (data: User): Promise<any> => {
        try {
            return data
        } catch (error) {
            return error
        }
    }
}

export { userService }