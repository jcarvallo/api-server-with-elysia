import { Elysia } from 'elysia'
import { userController } from '../controllers/user.controller'

const userRoute = ((app: Elysia) =>
    app.group('/users', (app) =>
        app.get('/', (req) => userController.getUser(req))))


export default userRoute