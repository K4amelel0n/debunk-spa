import type { Post } from '@api/posts';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="card bg-base-100 shadow-md border border-base-200 hover:shadow-lg transition-all">
      <div className="card-body p-6">
        
        <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-error shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <div>
                <h2 className="card-title text-base-content">{post.title}</h2>
            </div>
    <article className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="text-base-content/80">{post.content}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-base-content/60">
          <span>{post.user.email}</span>
          <span>{formattedDate}</span>
        </div>

        <div className="divider my-2"></div>

        <div className="flex gap-3">
            <div className="w-1 bg-success rounded-full opacity-50"></div>
            <div className="w-full">
                <p className="text-base-content/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {post.content}
                </p>
            </div>
        </div>

        <div className="flex justify-between items-end mt-4 pt-2">
            <button className="btn btn-xs btn-ghost text-info gap-1 px-0 hover:bg-transparent hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                Źródło
            </button>

            <div className="text-right text-xs text-base-content/60">
                <div className="font-bold">{post.authorName || 'Anonim'}</div>
                <div>{formattedDate}</div>
            </div>
        </div>

      </div>
    </article>
  );
};

export default PostCard;