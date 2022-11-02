import { User } from "../Models/User";
import { IUserRepository } from "../Interfaces/IUserRepository";
import axios from "axios";

export class UserRepository implements IUserRepository {

    GetUser = async (id: string): Promise<User> => {
        return axios.get<User>(`https://localhost:7254/api/user/${id}`)
            .then(response => {
                if (response.status === 200)
                    return response.data;
                else {
                    console.log("Request failed");
                    return {} as User
                }
            })

    }

    GetUsers = async (): Promise<User[]> => {
        return axios.get<User[]>('https://localhost:7254/api/user')
            .then(response => {
                if (response.status === 200) {
                    console.log("Received:", response.data)
                    return response.data;
                }
                else {
                    console.log("Request failed");
                    return [] as User[]
                }
            })
    }

    CreateUser = async (user: User): Promise<User> => {
        return axios.post<User>('https://localhost:7254/api/user',
            {
                name: user.name,
                vorname: user.vorname,
                e_mail: user.e_mail,
                telefon: user.telefon,
                geburtstag: user.geburtstag
            }
        ).then(response => {
            if (response.status === 201)
                return response.data;
            else {
                throw Error("Request failed");
            }
        })
    }

    UpdateUser = async (user: User): Promise<User> => {
        return axios.put<User>(`https://localhost:7254/api/user/${user.id}`,
            {
                name: user.name,
                vorname: user.vorname,
                e_mail: user.e_mail,
                telefon: user.telefon,
                geburtstag: user.geburtstag
            }
        ).then(response => {
            if (response.status === 204)
                return response.data;
            else {
                throw Error("Request failed");
            }
        })
    }

    DeleteUser = async (id: string): Promise<boolean> => {
        return axios.delete<User>(`https://localhost:7254/api/user/${id}`)
            .then(response => {
                if (response.status === 204)
                    return true;
                else {
                    return false;
                }
            })

    }
}

