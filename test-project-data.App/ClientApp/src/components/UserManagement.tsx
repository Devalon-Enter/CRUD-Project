import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//imports User Type definitions
import { User } from '../Models/User';

//imports UserRepository Methods
import { UserRepository } from '../Storage/UserRepository';

//Imports diffrent components
import { UserList } from './UserList';
import UserNew from './AddUser/UserNew';
import UserUpdate from './UserUpdate';




type PropType = {
    UserRepository: UserRepository
}

export const UserRepositoryContext = React.createContext(new UserRepository())


const UserManagement = (props: PropType): any => {
    //State: Default to inital_users Array
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        props.UserRepository.GetUsers().then(users => setUsers(users))
    }, []);

    //Gets new User through object
    const newUser = async (user: User) => {
        const backendUser = await props.UserRepository.CreateUser(user);

        setUsers((prevUsers: User[]) => {
            const newState = [...prevUsers, backendUser];
            return newState;
        });

        return backendUser.id;

    }

    const updateUser = (user: User): User => {
        console.log("in update user with user=", user)
        props.UserRepository.UpdateUser(user);

        setUsers((prevUsers: User[]) => {
            const ix = prevUsers.findIndex(x => x.id === user.id)
            prevUsers[ix] = user
            return prevUsers;
        })

        return user;
    }

    const deleteUser = (id: string): boolean => {
        console.log("in delete user with user=", id);
        props.UserRepository.DeleteUser(id);

        setUsers((prevState: User[]) => {
            const newState = prevState.filter(x => x.id !== id)
            return newState;
        });

        return true;
    }

    return (
        <>
            <UserRepositoryContext.Provider value={new UserRepository()}>
                <Routes>
                    <Route path="list" element={<UserList users={users} method={deleteUser}/>} />
                    <Route path="new" element={<UserNew newUser={newUser} />} />
                    <Route path="edit/:id" element={<UserUpdate updateUser={updateUser} />} />
                </Routes>
            </UserRepositoryContext.Provider>
        </>
    );
}

export default UserManagement;