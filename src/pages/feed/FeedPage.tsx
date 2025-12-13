import { useLoaderData } from 'react-router';
import type { Post } from '@api/posts';
import PostCard from '@components/PostCard';

const FeedPage = () => {
  const posts = useLoaderData() as Post[];

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Posty</h1>

      {posts.length === 0 ? (
        <div className="alert">
          <span>Brak postów do wyświetlenia.</span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeedPage;
