import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
    id: string;
    email: string;
    name: string;
    lastname: string;

    constructor({ email, name, lastname }: { email: string; name: string; lastname: string }) {
        this.id = crypto.randomUUID();
        this.name = name
        this.email = email
        this.lastname = lastname
    }
}