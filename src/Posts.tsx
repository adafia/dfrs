import { Post, fetchTimelineData } from "./api";


const resource = fetchTimelineData(1);

function ProfileTimeline() {
  const posts = resource.posts.read() as Post[];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProfileTimeline;
