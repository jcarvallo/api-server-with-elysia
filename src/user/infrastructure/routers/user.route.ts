import { Elysia, t } from 'elysia'
import { UserAddDto, UserByIdDto } from '../controllers/user.dto'
import { MockRepository } from '../repository/mock.repository'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controllers/user.controller'

const userRepository = new MockRepository()
const userUseCase = new UserUseCase(userRepository)
const useCtrl = new UserController(userUseCase)

const userRoute = ((app: Elysia) =>
    app.group('/users', (app) =>
        app.get('/', (req) => useCtrl.getAllUser()))
        .group('/users', app =>
            app.post('/add', ({ body }) => useCtrl.addUser(body), UserAddDto))
        .group('/users', app =>
            app.get('/:id', ({ params: { id } }) => useCtrl.getUserById(id), UserByIdDto)))

export default userRoute