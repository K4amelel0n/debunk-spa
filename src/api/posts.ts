import { api } from '@api';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get('/api/posts');
  return response.data;
};
