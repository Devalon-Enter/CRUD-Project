import { User } from '../Models/User';


export interface IUserRepository {
    GetUser: (id: string) => Promise<User>,
    GetUsers: () => Promise<User[]>,
    CreateUser: (user: User) => Promise<User>
    UpdateUser: (user: User) => Promise<User>,
    DeleteUser: (id: string) => Promise<boolean>
}