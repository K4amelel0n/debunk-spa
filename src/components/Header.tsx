import { Link, useLoaderData } from 'react-router';
import UserMenu from './UserMenu';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const data = useLoaderData() as { user?: any } | null;
  const isUser = data && data.user;

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-200 shadow-sm transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-2xl font-black tracking-tight gap-2 px-2 hover:bg-transparent">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-600">
              Debunk
            </span>
            <span className="text-2xl drop-shadow-sm">🛡️</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium text-base-content/80">
            <li>
                <Link to="/" className="hover:text-primary hover:bg-primary/10 transition-colors">
                    Feed
                </Link>
            </li>
            <li>
                <a className="hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                    Ranking
                </a>
            </li>
            <li>
                <a className="hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                    O stronie
                </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          
          <ThemeSwitcher />

          {isUser ? (
            <div className="flex items-center gap-3">
              <Link 
                to="/posts/add" 
                className="btn btn-sm btn-primary hidden sm:flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Dodaj
              </Link>
              
              <div className="border-l border-base-300 pl-3 ml-1">
                 <UserMenu />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="btn btn-ghost btn-sm font-medium hover:bg-base-200">
                Zaloguj
              </Link>
              <Link to="/register" className="btn btn-neutral btn-sm shadow-md text-white">
                Załóż konto
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;