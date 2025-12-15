const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
      <nav>
        <header className="footer-title">Serwis</header> 
        <a className="link link-hover">O nas</a>
        <a className="link link-hover">Regulamin</a>
        <a className="link link-hover">Polityka prywatności</a>
      </nav> 
      <nav>
        <header className="footer-title">Społeczność</header> 
        <a className="link link-hover">Discord</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Facebook</a>
      </nav> 
      <nav>
        <header className="footer-title">Debunk App</header> 
        <p>Copyright © 2025 - Wszystkie prawa zastrzeżone</p>
      </nav>
    </footer>
  );
};

export default Footer;