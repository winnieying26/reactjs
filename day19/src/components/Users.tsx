import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { fetchUsers } from "../state/users/userSlice";

const Users: React.FC = () => {
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => {
          const {id, username, name, email} = user;
         
          return <li key={id}>
            <p>UserName: {username}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
