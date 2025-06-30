export default function NotFound() {
  return (
    <div style={{ 
      backgroundColor: '#1A2A44', // Bleu foncé de la palette
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF', // Texte blanc
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '10rem',
        color: '#F4A261', // Orange pour les chiffres 404
        margin: '0',
        lineHeight: '1'
      }}>
        404
      </h1>
      <p style={{ 
        fontSize: '1.5rem',
        color: '#E9C46A', // Jaune clair pour le texte
        margin: '1rem 0'
      }}>
        Halaman yang anda cari tidak temukan, untuk kembali ke toko di bawah
      </p>
      <a href="/" style={{ 
        backgroundColor: '#E76F51', // Orange vif pour le bouton
        color: '#FFFFFF',
        padding: '0.5rem 1rem',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem'
      }}>
        Back to Homepage
      </a>
    </div>
  );
}