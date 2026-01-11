import type { Post } from '@api/posts';
import { mockPosts } from '../../api/mockData';

const USE_MOCK_DATA = true;

const feedLoader = async (): Promise<{ posts: Post[] } | { error: string }> => {
  if (USE_MOCK_DATA) {
    return { posts: mockPosts };
  }

  return { posts: mockPosts };
};

export default feedLoader;
