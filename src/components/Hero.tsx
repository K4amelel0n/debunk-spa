import { useNavigate, useRouteLoaderData } from 'react-router';

const Hero = () => {
  const navigate = useNavigate();
  
  const authData = useRouteLoaderData('root') as { user?: any } | null;
  const isUserLoggedIn = authData && authData.user;

  const handleAddPostClick = () => {
    if (isUserLoggedIn) {
      navigate('/posts/add');
    } else {
      const modal = document.getElementById('login_modal') as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  };

  const handleHowItWorksClick = () => {
    const modal = document.getElementById('how_it_works_modal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="hero min-h-[45vh] bg-gradient-to-br from-primary to-violet-800 text-primary-content mb-10 rounded-box shadow-2xl relative overflow-hidden">
      
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-30px] left-[20%] w-48 h-48 bg-secondary opacity-20 rounded-full blur-2xl"></div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-8 z-10">
        
        <div className="hidden lg:flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-white opacity-90 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" strokeWidth="2" />
            </svg>
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Poznaj prawdę.<br/>
            <span className="text-secondary-content/90">Oceniaj fakty.</span>
          </h1>
          
          <p className="py-6 text-lg opacity-90 leading-relaxed">
            Dołącz do społeczności Debunk. Przeglądaj <strong>Analizy</strong> ekspertów, 
            wystawiaj <strong>Oceny Społeczności</strong> i pomóż nam budować rzetelne źródło wiedzy.
          </p>
          
          <div className="flex gap-4 justify-center lg:justify-start">
            <button 
              onClick={handleAddPostClick} 
              className="btn btn-secondary btn-lg shadow-lg border-none hover:scale-105 transition-transform gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Dodaj Post do analizy
            </button>
            
            <button 
              onClick={handleHowItWorksClick}
              className="btn btn-neutral btn-lg text-white shadow-lg gap-2 border-none hover:scale-105 transition-transform"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Jak to działa?
            </button>
          </div>
        </div>
      </div>

      <dialog id="login_modal" className="modal text-base-content">
        <div className="modal-box w-11/12 max-w-lg bg-base-100">
           <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="font-bold text-2xl mb-2">Tylko dla zalogowanych</h3>
            <p className="text-base-content/70 mb-6">
                Dodawanie nowych <strong>Analiz</strong> wymaga konta w systemie. Zaloguj się, aby kontynuować.
            </p>
            <div className="flex flex-col w-full gap-3">
                <button onClick={() => navigate('/login')} className="btn btn-primary w-full">Zaloguj się</button>
                <button onClick={() => navigate('/register')} className="btn btn-outline w-full">Załóż darmowe konto</button>
            </div>
            <div className="modal-action w-full mt-4">
                <form method="dialog" className="w-full">
                    <button className="btn btn-ghost w-full btn-sm">Anuluj</button>
                </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop"><button>close</button></form>
      </dialog>

      <dialog id="how_it_works_modal" className="modal text-base-content">
        <div className="modal-box w-11/12 max-w-3xl bg-base-100">
          <h3 className="font-bold text-3xl text-center mb-8 text-primary">Jak działa Debunk?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="card bg-base-200 shadow-sm border border-base-300">
              <div className="card-body items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-error/20 flex items-center justify-center mb-2 text-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h4 className="font-bold text-lg">1. Znajdź Fake News</h4>
                <p className="text-sm text-base-content/70">Natrafiłeś na podejrzaną informację? Sprawdź w naszej bazie, czy ktoś już ją zgłosił i przeanalizował.</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm border border-base-300">
              <div className="card-body items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center mb-2 text-info">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </div>
                <h4 className="font-bold text-lg">2. Analiza Ekspercka</h4>
                <p className="text-sm text-base-content/70">Zweryfikowani <strong>Redaktorzy</strong> badają sprawę, dostarczają dowody naukowe i publikują werdykt.</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm border border-base-300">
              <div className="card-body items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-2 text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-lg">3. Ocena Społeczności</h4>
                <p className="text-sm text-base-content/70">Jako Użytkownik oceniasz jakość analizy. Twoja ocena buduje wiarygodność rankingu.</p>
              </div>
            </div>

          </div>

          <div className="modal-action justify-center mt-8">
            <form method="dialog">
              <button className="btn btn-primary px-8">Rozumiem, zaczynamy!</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop"><button>close</button></form>
      </dialog>

    </div>
  );
};

export default Hero;