import { useAtom } from "jotai";
import { Post, fetchPosts } from "./api";
import useSWR from "swr";
import { userAtom } from "./store";

function ProfileTimeline() {
  const [currentUserId] = useAtom(userAtom);
  const { data: posts } = useSWR<Post[]>(
    ["posts", currentUserId],
    ([path, currentUserId]: [string, number]) => fetchPosts(path, currentUserId),
    { suspense: true }
  );

  return (
    <ul>
      {posts && posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProfileTimeline;
