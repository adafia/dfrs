import { useAtom } from "jotai";
import { User, fetchUsersData } from "./api";
import { userAtom } from "./store";

const resource = fetchUsersData();

function Users() {
  const [, setCurrentUser] = useAtom(userAtom);
  const users = resource.users.read() as User[];
  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
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
