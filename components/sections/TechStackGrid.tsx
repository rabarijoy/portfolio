'use client';

import { useState, useEffect, useRef } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp,
  SiReact, SiSymfony, SiTailwindcss,
  SiPostgresql, SiSqlite, SiClickhouse,
  SiGit, SiGithub, SiGitlab, SiNpm, SiDocker,
  SiWordpress, SiDrupal, SiWebflow,
  SiJson, SiVercel, SiFigma,
} from 'react-icons/si';
import { 
  Database, Package, Box, Globe, FileJson, Zap, Code2, Layers, Flame
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export function TechStackGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const iconRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Technologies avec leurs couleurs officielles et logos
  const technologies: TechItem[] = [
    // Langages
    { id: 'html', name: 'HTML', color: '#E34F26', icon: SiHtml5 },
    { id: 'css', name: 'CSS', color: '#1572B6', icon: SiCss3 },
    { id: 'js', name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript },
    { id: 'php', name: 'PHP', color: '#777BB4', icon: SiPhp },
    { id: 'sql', name: 'SQL', color: '#336791', icon: Database },
    { id: 'java', name: 'Java', color: '#ED8B00', icon: Code2 },
    { id: 'csharp', name: 'C#', color: '#239120', icon: Code2 },
    
    // Frameworks
    { id: 'react', name: 'React', color: '#61DAFB', icon: SiReact },
    { id: 'symfony', name: 'Symfony', color: '#000000', icon: SiSymfony },
    { id: 'tailwind', name: 'Tailwind', color: '#06B6D4', icon: SiTailwindcss },
    { id: 'alpine', name: 'Alpine.js', color: '#8BC0D0', icon: Code2 },
    { id: 'phoenix', name: 'Phoenix', color: '#FD4F00', icon: Flame },
    { id: 'phoenix-live', name: 'LiveView', color: '#FD4F00', icon: Flame },
    
    // Bases de données
    { id: 'postgresql', name: 'PostgreSQL', color: '#336791', icon: SiPostgresql },
    { id: 'sqlite', name: 'SQLite', color: '#003B57', icon: SiSqlite },
    { id: 'clickhouse', name: 'ClickHouse', color: '#FFCC02', icon: SiClickhouse },
    
    // Outils de développement
    { id: 'git', name: 'Git', color: '#F05032', icon: SiGit },
    { id: 'github', name: 'GitHub', color: '#181717', icon: SiGithub },
    { id: 'gitlab', name: 'GitLab', color: '#FC6D26', icon: SiGitlab },
    { id: 'npm', name: 'npm', color: '#CB3837', icon: SiNpm },
    { id: 'docker', name: 'Docker', color: '#2496ED', icon: SiDocker },
    { id: 'lando', name: 'Lando', color: '#3B82F6', icon: Box },
    
    // CMS & Design
    { id: 'wordpress', name: 'WordPress', color: '#21759B', icon: SiWordpress },
    { id: 'drupal', name: 'Drupal', color: '#0678BE', icon: SiDrupal },
    { id: 'webflow', name: 'Webflow', color: '#4353FF', icon: SiWebflow },
    { id: 'framer', name: 'Framer', color: '#0055FF', icon: Layers },
    
    // APIs & Formats
    { id: 'rest', name: 'REST API', color: '#FF6B6B', icon: Zap },
    { id: 'api', name: 'API', color: '#4ECDC4', icon: Zap },
    { id: 'json', name: 'JSON', color: '#000000', icon: SiJson },
    
    // Déploiement & Outils
    { id: 'vercel', name: 'Vercel', color: '#000000', icon: SiVercel },
    { id: 'cursor', name: 'Cursor', color: '#000000', icon: Code2 },
    { id: 'sonnet', name: 'Sonnet', color: '#000000', icon: Zap },
    { id: 'gpt', name: 'GPT', color: '#10A37F', icon: Zap },
    { id: 'figma', name: 'Figma', color: '#F24E1E', icon: SiFigma },
    { id: 'uml', name: 'UML', color: '#E34F26', icon: Layers },
  ];

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const getIconOpacity = (iconX: number, iconY: number) => {
    const distance = getDistance(mousePos.x, mousePos.y, iconX, iconY);
    const threshold = 150;
    
    // Icônes lointaines : invisibles
    if (distance > threshold) return 0;
    // Icônes proches : opacité progressive de 0 à 1
    return 1 - (distance / threshold);
  };

  const getIconScale = (iconX: number, iconY: number) => {
    const distance = getDistance(mousePos.x, mousePos.y, iconX, iconY);
    const threshold = 150;
    
    if (distance > threshold) return 0.8;
    const scale = 0.8 + (1 - distance / threshold) * 0.4;
    return Math.min(scale, 1.2);
  };

  const getBackgroundColor = (iconX: number, iconY: number, originalColor: string) => {
    const distance = getDistance(mousePos.x, mousePos.y, iconX, iconY);
    const threshold = 150;
    
    // Si la case est loin, utiliser un gris très clair
    if (distance > threshold) {
      return '#f5f5f5'; // Gris très très clair
    }
    // Sinon, utiliser la couleur originale
    return originalColor;
  };

  // Update animations on mouse move
  useEffect(() => {
    const updateAnimations = () => {
      itemRefs.current.forEach((element, id) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const iconX = rect.left + rect.width / 2;
          const iconY = rect.top + rect.height / 2;
          
          // Mettre à jour la couleur de fond du carré
          const tech = technologies.find(t => t.id === id);
          if (tech) {
            const backgroundColor = getBackgroundColor(iconX, iconY, tech.color);
            element.style.backgroundColor = backgroundColor;
          }
          
          // Mettre à jour l'opacité et le scale de l'icône
          const iconElement = iconRefs.current.get(id);
          if (iconElement) {
            const iconOpacity = getIconOpacity(iconX, iconY);
            const iconScale = getIconScale(iconX, iconY);
            
            iconElement.style.opacity = iconOpacity.toString();
            iconElement.style.transform = `scale(${iconScale})`;
          }
        }
      });
    };

    updateAnimations();
  }, [mousePos]);

  return (
    <div className="tech-stack-container">
      <div className="tech-stack-grid">
        {technologies.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={tech.id}
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(tech.id, el);
                } else {
                  itemRefs.current.delete(tech.id);
                }
              }}
              className="tech-stack-item"
              style={{
                backgroundColor: '#f5f5f5', // Gris très clair par défaut
              }}
              aria-label={tech.name}
            >
              <div
                ref={(el) => {
                  if (el) {
                    iconRefs.current.set(tech.id, el);
                  } else {
                    iconRefs.current.delete(tech.id);
                  }
                }}
                className="tech-stack-icon-wrapper"
              >
                <IconComponent size={32} className="tech-stack-icon" />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="tech-stack-hint">
        Déplacez votre souris pour révéler les icônes
      </div>
    </div>
  );
}

