import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import YouTubeLogo from '/static/img/social-networks/youtube.png'
import GithubLogo from '/static/img/social-networks/github.png'
import FacebookLogo from '/static/img/social-networks/facebook.png'
import { URL_REFERENCES } from './labels';

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{
    maxWidth: "100%",
    height: "auto",
  }} width={'256px'} viewBox="0 0 24 24" focusable="false" aria-hidden="true" fill="white">
    <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3m4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" />
  </svg>
);

function Chip({ title }) {
  return (
    <button
      onClick={() => console.log(title)}
      style={{
        padding: '6px 12px',
        borderRadius: '10px',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'black',
      }}
    >
      <span style={{ fontSize: '1.1rem', color: 'white' }}>{title}</span>
    </button>
  );
}

const elements = {
  youtube: ["YouTube", YouTubeLogo, "Mira tutoriales y contenido sobre el aplicativo", URL_REFERENCES.YOUTUBE],
  facebook: ["Facebook", FacebookLogo, "Mantente al tanto de las actualizaciones del aplicativo", URL_REFERENCES.FACEBOOK],
  github: ["GitHub", GithubLogo, "Observa y contribuye al código", URL_REFERENCES.GITHUB],
};

function Card({ text }) {
  const [title, img, body, url_site] = elements[text];

  return (
    <div
      style={{
        flex: '1 1 250px',
        backgroundColor: '#f9f9f9',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
      }}
    >
      <img src={img} alt={title} style={{ maxHeight: 60 }} />
      <a target="_blank" href={url_site}><h3 style={{ margin: '10px 0' }}>{title}</h3></a>
      <p style={{ fontSize: '0.95rem', color: '#555' }}>{body}</p>
    </div>
  );
}

const Comunnity = () => {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Comunidad</h2>
      <p style={{ fontSize: '1.2rem', fontWeight: 'normal', textAlign: 'center' }}>
        Consulta y comparte con esta increíble comunidad Open Source.
      </p>
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        <Card text="youtube" />
        <Card text="github" />
        <Card text="facebook" />
      </div>
    </div>
  );
};
const HeroSection = () => {
  // Estilos base para los chips
  const chipStyle = {
    padding: '8px 16px',
    borderRadius: '10px',
    border: '1px solid white',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: '#614B8C',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  };

  // Estilos en hover aplicados dinámicamente
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#d8c9f1';
    e.currentTarget.style.transform = 'scale(1.06)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section
      style={{
        backgroundColor: '#614B8C',
        color: 'white',
        padding: '50px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        borderBottom: '2px solid #3e2b62',
      }}
    >
      <div
        style={{
          flex: '1 1 320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '600px',
        }}
      >
        <h1 style={{ fontSize: '2.8rem', margin: 0 }}>Documentación de Fireploy</h1>
        <p style={{ fontSize: '1.3rem', fontWeight: 300 }}>
          Descubre todos los conceptos esenciales para el uso del aplicativo
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: 300 }}>Selecciona tu rol de usuario</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {["Estudiante", "Docente", "Administrador"].map((title) => (
            <Link
              key={title}
              to={`/docs/${title.toLowerCase()}/intro`}
              style={{ ...chipStyle }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ flex: '0 1 200px', textAlign: 'center', maxWidth: '100%' }}>
        <RocketIcon />
      </div>
    </section>
  );
};
const DeploySection = () => {
  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
        ¡Despliega con Fireploy!
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/T0w71iHVO10?si=rdLNJlvmMk1tc8xq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <style>
        {`
          .video-wrapper {
            position: relative;
            width: 100%;
            max-width: 720px; /* breakpoint en escritorio */
            aspect-ratio: 16 / 9;
          }

          .video-wrapper iframe {
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }

          @media (max-width: 768px) {
            .video-wrapper {
              max-width: 100%; /* en móvil ocupa todo */
            }
          }
        `}
      </style>
    </div>
  );
};

const Separator = () => (
  <div
    style={{
      height: "2px",
      background: "linear-gradient(to right, transparent, #ccc, transparent)",
      margin: "40px 0",
      width: "100%",
    }}
  />
);

export default function HomepageFeatures() {
  return (
    <>
      <HeroSection />
      <DeploySection />
      <Separator />
      <Comunnity />
    </>
  );
}
