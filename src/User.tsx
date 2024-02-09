import { useAtom } from "jotai";
import { User, fetchUser } from "./api";
import { userAtom } from "./store";
import { useEffect, useState } from 'react';

function ProfileDetails() {
  const [currentUserId] = useAtom(userAtom);
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetchUser("users", currentUserId).then((data) => {
      setUser(data)
    })
  } , [currentUserId])

  if (!user) {
    return <h1>Loading user profile...</h1>
  }

  return <h1>{user && user.name}</h1>;
}

export default ProfileDetails;
