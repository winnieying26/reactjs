import { createContext, useEffect } from "react";
import { useState } from "react";

export interface User{
    name: string;
    age: number;
    isStudent: boolean
}


interface UserContextType {
    users : User[] | null;
    addUser: (user : User) => void;
    updateUserId: (id : string) => void;
    deleteUser: (id : string) => void;

}

const contextInitialValues ={
    users: null,
    addUser: () => null,
    updateUserId: () => null,
    deleteUser: () => null,

}

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props : Props) =>{
const [users, setUsers] = useState<User[] | null > (null);

useEffect(()=>{
setUsers([{name: "Joe", age: 23, isStudent: true}])
}, [])

const addUser = (user: User)=> null;
const updateUserId = (id: string) => null;
const deleteUser = (id: string) => null;

    return (
   <UserContext.Provider value = {{users, addUser, updateUserId, deleteUser}}>
    {props.children}
    </UserContext.Provider>
    )
    
   

}