import { useAtom } from "jotai";
import { User, fetchUsers } from "./api";
import { userAtom } from "./store";
import { useEffect, useState } from "react";

function Users() {
  const [, setCurrentUser] = useAtom(userAtom);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetchUsers("users").then((data) => {
      setUsers(data);
    });
  }, []);

  if (!users) {
    return <h1>Loading users...</h1>;
  }

  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users &&
          users.map((user) => (
            <li
              className="user"
              key={user.id}
              onClick={() => setCurrentUser(user.id)}
            >
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Users;
