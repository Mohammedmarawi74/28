
import React from 'react';
import { 
  Handshake, 
  TrendingUp, 
  Target, 
  Search, 
  Calendar, 
  MapPin, 
} from 'lucide-react';
import { InfographicData, LogoPosition } from '../types';

interface PreviewCardProps {
  data: InfographicData;
}

const IconMap: Record<string, React.ReactNode> = {
  handshake: <Handshake size={22} />,
  growth: <TrendingUp size={22} />,
  investment: <Target size={22} />,
  search: <Search size={22} />,
};

const PreviewCard: React.FC<PreviewCardProps> = ({ data }) => {
  const getLogoPositionStyle = (pos?: LogoPosition): React.CSSProperties => {
    switch (pos) {
      case 'top-left': return { top: '1rem', left: '1rem' };
      case 'bottom-right': return { bottom: '5rem', right: '1rem' };
      case 'bottom-left': return { bottom: '5rem', left: '1rem' };
      case 'top-right': 
      default: return { top: '1rem', right: '1rem' };
    }
  };

  const themeStyles = {
    '--primary': data.colors.primary,
    '--secondary': data.colors.secondary,
    '--background': data.colors.background,
    '--text': data.colors.text,
  } as React.CSSProperties;

  return (
    <div 
      className="poster-root font-ibm" 
      style={{ ...themeStyles, backgroundColor: 'var(--background)' }}
    >
      <style>{data.customCss}</style>

      {/* === HERO IMAGE + GRADIENT + TITLE === */}
      <div className="hero-section">
        <img src={data.headerImage} alt="Event" className="hero-image" />
        <div 
          className="hero-gradient"
          style={{ 
            background: `linear-gradient(180deg, rgba(0,0,0,0) 10%, var(--primary) 100%)` 
          }}
        />
        {data.logoUrl && (
          <div className="hero-logo">
            <img src={data.logoUrl} alt="Logo" />
          </div>
        )}
        <div className="hero-title-overlay">
          <h2 className="hero-headline">{data.mainTitle}</h2>
          <p className="hero-subtitle">{data.subTitle}</p>
        </div>
      </div>

      {/* === INFO STRIP === */}
      <div className="info-strip" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="info-strip-item">
          <Calendar size={13} color="white" />
          <span>{data.eventDate}</span>
        </div>
        <div className="info-strip-divider" />
        <div className="info-strip-item">
          <MapPin size={13} color="white" />
          <span>{data.eventLocation}</span>
        </div>
      </div>

      {/* === GOALS (2x2 Grid) === */}
      <div className="section-goals">
        <div className="section-header">
          <div className="section-header-line" style={{ backgroundColor: 'var(--secondary)' }} />
          <h3 className="section-heading" style={{ color: 'var(--primary)' }}>الأهداف</h3>
          <div className="section-header-line" style={{ backgroundColor: 'var(--secondary)' }} />
        </div>
        
        <div className="goals-grid-2x2">
          {data.goals.map((goal) => (
            <div key={goal.id} className="goal-tile">
              <div 
                className="goal-tile-icon"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'white'
                }}
              >
                {IconMap[goal.icon] || IconMap.search}
              </div>
              <p className="goal-tile-text" style={{ color: 'var(--text)' }}>
                {goal.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === ENTITIES === */}
      <div className="section-entities">
        <div className="section-header">
          <div className="section-header-line" style={{ backgroundColor: 'var(--secondary)' }} />
          <h3 className="section-heading" style={{ color: 'var(--primary)' }}>الجهات المنضمة</h3>
          <div className="section-header-line" style={{ backgroundColor: 'var(--secondary)' }} />
        </div>
        
        <div className="entities-chips">
          {data.entities.map((entity) => (
            <div key={entity.id} className="entity-chip">
              <div 
                className="entity-chip-dot"
                style={{ backgroundColor: 'var(--secondary)' }}
              />
              <span className="entity-chip-text" style={{ color: 'var(--text)' }}>
                {entity.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* === FOOTER === */}
      <footer className="poster-bottom-footer">
        <div 
          className="footer-accent-line"
          style={{ background: `linear-gradient(90deg, var(--secondary), var(--primary))` }}
        />
        <div className="footer-content-row">
          <span className="footer-brand-name" style={{ color: 'var(--primary)' }}>
            منصة المستثمر الاقتصادية
          </span>
          <span className="footer-url" style={{ color: 'var(--primary)' }}>
            al-investor.com
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PreviewCard;
