import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    .use(swagger())
    .use(import('./routers/user.route'))
    .listen(process?.env?.PORT || 10)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
