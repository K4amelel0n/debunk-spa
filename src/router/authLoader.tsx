const authLoader = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    return JSON.parse(token);
  }
  return { role: 'guest' };
};

export default authLoader;
