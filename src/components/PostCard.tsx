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
    <article className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="text-base-content/80">{post.content}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-base-content/60">
          <span>{post.authorName}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
