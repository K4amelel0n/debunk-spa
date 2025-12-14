import { useLoaderData } from 'react-router';
import type { Post } from '@api/posts';
import PostCard from '@components/PostCard';

const FeedPage = () => {
  const { posts, error } = useLoaderData() as {
    posts: Post[] | null;
    error?: string;
  };

  if (error) {
    return (
      <div className="alert alert-error">
        <span>{error}</span>
      </div>
    );
  }

  if (!posts) {
    return (
      <div className="alert alert-error">
        <span>Wystąpił błąd podczas ładowania postów.</span>
      </div>
    );
  }

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
