import { Outlet } from 'react-router';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200 font-sans text-base-content">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 sm:p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;