export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="grid-overlay"></div>
      <div className="decorative-dots" style={{ top: '20%', left: '10%' }}></div>
      <div className="decorative-dots" style={{ top: '70%', right: '10%' }}></div>
      <button className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1>404</h1>
      <p>Oups ! Cette page n'existe pas. Retournez à la page d’accueil en cliquant ci-dessous.</p>
      <a href="/" className="back-button">Revenir à l’accueil</a>
    </div>
  );
}