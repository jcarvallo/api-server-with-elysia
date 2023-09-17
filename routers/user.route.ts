import { Elysia } from 'elysia'
import { userController } from '../controllers/user.controller'
import { UserDto } from '../controllers/user.dto'

const userRoute = ((app: Elysia) =>
    app.group('/users', (app) =>
        app.get('/', (req) => userController.getUser(req)))
           .group('/users', app => app
                 .post('/add', ({ body }) => userController.addUser(body), UserDto)))


export default userRoute