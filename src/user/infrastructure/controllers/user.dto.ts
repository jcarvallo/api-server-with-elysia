import { t } from 'elysia'

export const UserAddDto = {

    body: t.Object({
        email: t.String(),
        name: t.String(),
        lastname: t.String(),
    }),

}

export const UserByIdDto = {
    params: t.Object({
        id: t.String()
    })
}