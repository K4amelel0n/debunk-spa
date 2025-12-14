import { getPosts } from '@api/posts';

const feedLoader = async () => {
  try {
    const posts = await getPosts();
    return { posts: posts };
  } catch (error) {
    return { error: 'Błąd podczas ładowania postów.' };
  }
};

export default feedLoader;
