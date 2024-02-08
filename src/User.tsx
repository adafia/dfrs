import { User, fetchProfileData } from "./api";

const resource = fetchProfileData(1);

function ProfileDetails() {
  const user = resource.user.read() as User;
  return <h1>{user.name}</h1>;
}

export default ProfileDetails;
