import { redirect } from 'react-router';
import { toast } from 'react-toastify';

const logoutAction = async () => {
  localStorage.removeItem('token');
  const notify = () => toast.success('Wylogowano pomyślnie');
  notify();
  return redirect('/');
};

export default logoutAction;
