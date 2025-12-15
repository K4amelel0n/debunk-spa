import { useLoaderData } from 'react-router';
import type { Post } from '@api/posts';
import PostCard from '@components/PostCard';
import Hero from '@components/Hero'; 

const FeedPage = () => {
  const posts = (useLoaderData() as Post[]) || [];
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
    <div className="space-y-10">
      
      <Hero />

      <section className="flex flex-col gap-6">
        {posts.length === 0 ? (
          <div className="alert alert-info shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Brak postów do wyświetlenia. Bądź pierwszy!</span>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FeedPage;