
export const User = (user : User) =>{
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>This is {user.isStudent} student</p>
        </div>
    )
}