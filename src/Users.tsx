import { useAtom } from "jotai";
import { User, fetchUsers } from "./api";
import { userAtom } from "./store";
import useSWR from "swr";

function Users() {
  const [, setCurrentUser] = useAtom(userAtom);
  const { data: users } = useSWR<User[]>("users", fetchUsers, {
    suspense: true,
  });
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
