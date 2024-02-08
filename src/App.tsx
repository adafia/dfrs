import { useEffect, useState } from 'react'
import './App.css'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Post[] | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  } , []);

  return (
    <>
      <h1>Posts</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data && data.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
