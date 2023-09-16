import { Context, Elysia } from 'elysia'
import { userController } from '../controllers/user.controller'

export const userRoute = ((app: Elysia) =>
    app.group('/users', (app) =>
        app.get('/', (req) => userController.getUser(req))))

        
export default userRoute