import AppLogo from '@components/AppLogo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-start py-8 px-4 pt-16 sm:pt-24">
      <header className="mb-8">
        <AppLogo />
      </header>
      
      <div className="flex justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;