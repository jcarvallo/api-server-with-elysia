import { Elysia } from 'elysia'
import { userRoute } from './routers/user.route';

const app = new Elysia()
    .use(import('./routers/user.route'))
    .listen(process?.env?.PORT || 10)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)