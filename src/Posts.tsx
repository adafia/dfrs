import { useAtom } from "jotai";
import { Post, fetchPosts } from "./api";
import { userAtom } from "./store";
import { useEffect, useState } from 'react';

function ProfileTimeline() {
  const [currentUserId] = useAtom(userAtom);
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    fetchPosts("posts", currentUserId).then((data) => {
      setPosts(data)
    })
  } , [currentUserId])

  if (!posts) {
    return <h1>Loading posts...</h1>
  }

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
