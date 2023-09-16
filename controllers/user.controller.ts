const userController = {
    getUser: async (req: any): Promise<any> => {
        const user = {
            email: 'jcarvallo@gmail.com',
            name: 'Jose',
            lastName: 'Carvallo'
        }
        return user
    }
}

export { userController }