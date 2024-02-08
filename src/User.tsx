import { useAtom } from "jotai";
import { User, fetchUser } from "./api";
import { userAtom } from "./store";
import useSWR from "swr";

function ProfileDetails() {
  const [currentUserId] = useAtom(userAtom);
  const { data: user } = useSWR<User>(
    ["users", currentUserId],
    ([path, currentUserId]: [string, number]) => fetchUser(path, currentUserId),
    { suspense: true }
  );

  return <h1>{user && user.name}</h1>;
}

export default ProfileDetails;
