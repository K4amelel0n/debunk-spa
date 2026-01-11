import { api } from '@api';
import type { ApiResponse } from './types';
import type { User } from './auth';

export interface Category {
  id: number;
  nazwa: string;
  opis?: string;
}

export interface SourceLink {
  id: number;
  url: string;
  title?: string;
}

export interface Comment {
  id: number;
  tresc: string;
  user: User;
  data: string;
}

export interface Rating {
  id: number;
  typ: boolean;
  data: string;
  userId: number;
}

export const PostStatus = {
  OCZEKUJACY: 0,
  OPUBLIKOWANY: 1,
  ODRZUCONY: 2,
} as const;

export type PostStatusType = (typeof PostStatus)[keyof typeof PostStatus];

export interface Post {
  id: number;
  tytul: string;
  trescFakeNewsa: string;
  wyjasnienie: string;
  zrodla: SourceLink[];
  kategoria?: Category;
  status: PostStatusType;
  dataUtworzenia: string;
  autor: User;
  ocenyPozytywne: number;
  ocenyNegatywne: number;
  mojaOcena?: boolean | null;
  komentarze: Comment[];
  imageUrl?: string;
}

export interface CreatePostData {
  tytul: string;
  trescFakeNewsa: string;
  wyjasnienie: string;
  zrodla: string[];
  kategoriaId?: number;
  imageUrl?: string;
}

export const KATEGORIE: Category[] = [
  { id: 1, nazwa: 'Zdrowie', opis: 'Fake newsy dotyczące zdrowia i medycyny' },
  { id: 2, nazwa: 'Polityka', opis: 'Dezinformacja polityczna' },
  { id: 3, nazwa: 'Technologia', opis: 'Fałszywe informacje o technologii' },
  { id: 4, nazwa: 'Środowisko', opis: 'Fake newsy o klimacie i środowisku' },
  { id: 5, nazwa: 'Gospodarka', opis: 'Dezinformacja ekonomiczna' },
  { id: 6, nazwa: 'Nauka', opis: 'Fałszywe twierdzenia naukowe' },
];

const ROUTE = '/api/v1/posts';

export const getPosts = async (): Promise<ApiResponse<Post[]>> => {
  const response = await api.get(ROUTE);
  return response.data.data;
};

export const createPost = async (data: CreatePostData): Promise<Post> => {
  const response = await api.post(ROUTE, {
    title: data.tytul,
    description: data.trescFakeNewsa,
  });
  return response.data.data;
};
