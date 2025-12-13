import type { Post } from '@api/posts';

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Pierwszy post testowy',
    content: 'To jest treść pierwszego posta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authorName: 'Jan Kowalski',
    createdAt: '2025-12-13T10:00:00Z',
  },
  {
    id: 2,
    title: 'Drugi post testowy',
    content: 'Treść drugiego posta z przykładowymi danymi do testowania.',
    authorName: 'Anna Nowak',
    createdAt: '2025-12-12T15:30:00Z',
  },
  {
    id: 3,
    title: 'Trzeci post',
    content: 'Kolejny post pokazujący jak wygląda lista postów na stronie głównej.',
    authorName: 'Piotr Wiśniewski',
    createdAt: '2025-12-11T08:45:00Z',
  },
];

const feedLoader = async () => {
  // TODO: Zmienić na getPosts() gdy backend będzie gotowy
  // const posts = await getPosts();
  // return posts;
  return mockPosts;
};

export default feedLoader;
