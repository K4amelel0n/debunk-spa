import { api } from '@api';
import type { ApiResponse } from './types';
import type { User } from './auth';

export interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
  createdAt: string;
}

export interface CreatePostData {
  title: string;
  content: string;
}

const ROUTE = '/api/v1/posts';

export const getPosts = async (): Promise<ApiResponse<Post[]>> => {
  const response = await api.get(ROUTE);
  return response.data.data;
};

export const createPost = async (data: CreatePostData): Promise<Post> => {
  const response = await api.post(ROUTE, {
    title: data.title,
    description: data.content,
  });
  return response.data.data;
};
