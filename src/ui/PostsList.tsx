import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Headers from '../components/Header';

type post = {
  id: string;
  post: string;
}

const PostsList = () => {
  const [posts, setPosts] = useState<post[]>([]);
  const [post, setPost] = useState<string>('');
  const { threadId } = useParams();

  const handleClick = async () => {
    const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: post }),
    })
    setPost(await response.json());
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const jsonResponse = await response.json();
        setPosts(jsonResponse.posts);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  , [threadId, posts]);

  return (
    <div>
      <Headers />
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.post}</p>
        </div>
      ))}
      <input type="text" placeholder='投稿しよう！' value={post} onChange={(e) => setPost(e.target.value)} />
      <button onClick={handleClick}>投稿</button>
    </div>
  )
}

export default PostsList
