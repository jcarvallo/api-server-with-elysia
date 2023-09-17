import { t } from 'elysia'

export const UserDto = {

    body: t.Object({
        email: t.String(),
        name: t.String(),
        lastName: t.String(),
    }),

}