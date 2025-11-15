'use client';

import { useState, useEffect } from 'react';
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

interface GridIcon {
  id: string;
  row: number;
  col: number;
  x: number;
  y: number;
  bg: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

export function TechStackGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [horizontalPadding, setHorizontalPadding] = useState(40);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculer dynamiquement le nombre de colonnes en fonction de l'espace disponible
  const calculateGridCols = (): number => {
    if (typeof window === 'undefined') return 6;
    const containerMaxWidth = 1280;
    const viewportWidth = window.innerWidth;
    const actualWidth = Math.min(viewportWidth, containerMaxWidth);
    const padding = viewportWidth >= 1024 ? 40 : 20;
    const availableWidth = actualWidth - (padding * 2);
    const squareSize = 120;
    const gap = 5;
    
    // Calculer combien de carrés peuvent tenir : (availableWidth + gap) / (squareSize + gap)
    const maxCols = Math.floor((availableWidth + gap) / (squareSize + gap));
    return Math.max(4, Math.min(maxCols, 8)); // Entre 4 et 8 colonnes
  };

  const [gridCols, setGridCols] = useState(6);
  const gridRows = 8; // Nombre de lignes

  useEffect(() => {
    const updatePadding = () => {
      setHorizontalPadding(window.innerWidth >= 1024 ? 40 : 20);
      setGridCols(calculateGridCols());
    };
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  // Technologies avec leurs couleurs officielles
  const techList = [
    { icon: SiHtml5, color: '#E34F26' },
    { icon: SiCss3, color: '#1572B6' },
    { icon: SiJavascript, color: '#F7DF1E' },
    { icon: SiPhp, color: '#777BB4' },
    { icon: Database, color: '#336791' },
    { icon: Code2, color: '#ED8B00' },
    { icon: Code2, color: '#239120' },
    { icon: SiReact, color: '#61DAFB' },
    { icon: SiSymfony, color: '#000000' },
    { icon: SiTailwindcss, color: '#06B6D4' },
    { icon: Code2, color: '#8BC0D0' },
    { icon: Flame, color: '#FD4F00' },
    { icon: Flame, color: '#FD4F00' },
    { icon: SiPostgresql, color: '#336791' },
    { icon: SiSqlite, color: '#003B57' },
    { icon: SiClickhouse, color: '#FFCC02' },
    { icon: SiGit, color: '#F05032' },
    { icon: SiGithub, color: '#181717' },
    { icon: SiGitlab, color: '#FC6D26' },
    { icon: SiNpm, color: '#CB3837' },
    { icon: SiDocker, color: '#2496ED' },
    { icon: Box, color: '#3B82F6' },
    { icon: SiWordpress, color: '#21759B' },
    { icon: SiDrupal, color: '#0678BE' },
    { icon: SiWebflow, color: '#4353FF' },
    { icon: Layers, color: '#0055FF' },
    { icon: Zap, color: '#FF6B6B' },
    { icon: Zap, color: '#4ECDC4' },
    { icon: SiJson, color: '#000000' },
    { icon: SiVercel, color: '#000000' },
    { icon: Code2, color: '#000000' },
    { icon: Zap, color: '#000000' },
    { icon: Zap, color: '#10A37F' },
    { icon: SiFigma, color: '#F24E1E' },
    { icon: Layers, color: '#E34F26' },
  ];

  const specialIcons: Record<string, { bg: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string }> = {
    '2-5': { bg: '#61DAFB', icon: SiReact, color: '#ffffff' },
    '3-2': { bg: '#000000', icon: SiSymfony, color: '#ffffff' },
    '4-6': { bg: '#F05032', icon: SiGit, color: '#ffffff' },
    '2-1': { bg: '#06B6D4', icon: SiTailwindcss, color: '#ffffff' },
    '5-4': { bg: '#2496ED', icon: SiDocker, color: '#ffffff' },
    '3-5': { bg: '#000000', icon: SiVercel, color: '#ffffff' },
    '6-3': { bg: '#F24E1E', icon: SiFigma, color: '#ffffff' },
    '6-5': { bg: '#336791', icon: SiPostgresql, color: '#ffffff' },
    '1-5': { bg: '#E34F26', icon: SiHtml5, color: '#ffffff' },
  };

  // Calculer les positions des icônes
  // Les carrés les plus à gauche et à droite doivent être alignés avec les limites du container
  const calculateIcons = (): GridIcon[] => {
    const containerMaxWidth = 1280;
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : containerMaxWidth;
    const actualWidth = Math.min(viewportWidth, containerMaxWidth);
    
    // Position du premier carré (gauche) = padding gauche
    // Position du dernier carré (droite) = largeur totale - padding droit
    const leftEdge = horizontalPadding;
    const rightEdge = actualWidth - horizontalPadding;
    
    // Largeur totale disponible pour la grille
    const gridTotalWidth = rightEdge - leftEdge;
    const squareSize = 120; // Taille des carrés en CSS
    
    // Calculer le gap pour que les carrés extérieurs soient alignés avec les limites
    // Le premier carré commence au padding gauche, le dernier se termine au padding droit
    // gap = (gridTotalWidth - gridCols * squareSize) / (gridCols - 1)
    const totalSquaresWidth = gridCols * squareSize;
    const gapBetweenSquares = gridCols > 1 
      ? (gridTotalWidth - totalSquaresWidth) / (gridCols - 1)
      : 0;
    
    // Position de départ : centre du premier carré (aligné à gauche)
    const startX = leftEdge + squareSize / 2;
    
    // Position verticale : centrer dans le conteneur
    const containerHeight = typeof window !== 'undefined' 
      ? Math.min(window.innerHeight * 0.8, 90 * window.innerHeight / 100) 
      : 800;
    const topPadding = 50;
    const bottomPadding = 100; // Pour le hint
    const availableHeight = containerHeight - topPadding - bottomPadding;
    const gridHeightWithGap = gridRows * squareSize + (gridRows - 1) * gapBetweenSquares;
    const startY = topPadding + (availableHeight - gridHeightWithGap) / 2 + squareSize / 2;

    const icons: GridIcon[] = [];
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const key = `${row}-${col}`;
        const special = specialIcons[key];
        const techIndex = (row * gridCols + col) % techList.length;
        const tech = techList[techIndex];

        // Position X : startX + (col * (taille carré + gap uniforme))
        const x = startX + col * (squareSize + gapBetweenSquares);
        // Position Y : startY + (row * (taille carré + gap uniforme))
        const y = startY + row * (squareSize + gapBetweenSquares);

        icons.push({
          id: key,
          row,
          col,
          x: x,
          y: y,
          bg: special?.bg || tech.color,
          icon: special?.icon || tech.icon,
          color: special?.color || '#ffffff',
        });
      }
    }
    return icons;
  };

  const [icons, setIcons] = useState<GridIcon[]>([]);

  useEffect(() => {
    setIcons(calculateIcons());
  }, [horizontalPadding, gridCols, gridRows]);

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const getOpacity = (iconX: number, iconY: number) => {
    // Utiliser directement la position de la souris (déjà centrée)
    const distance = getDistance(mousePos.x, mousePos.y, iconX, iconY);
    const threshold = 200; // Augmenté pour inclure les carrés adjacents
    const closeThreshold = 80; // Zone très proche (carré directement sous le curseur)
    
    // Carré directement sous le curseur : opacité maximale
    if (distance <= closeThreshold) return 1;
    
    // Carrés adjacents : opacité élevée avec transition fluide
    if (distance <= threshold) {
      // Opacité minimale de 0.7 pour les carrés adjacents, maximale pour le proche
      const baseOpacity = 0.7;
      const additionalOpacity = (1 - baseOpacity) * (1 - (distance - closeThreshold) / (threshold - closeThreshold));
      return baseOpacity + additionalOpacity;
    }
    
    // Carrés lointains : invisibles
    return 0;
  };

  const getScale = (iconX: number, iconY: number) => {
    // Utiliser directement la position de la souris (déjà centrée)
    const distance = getDistance(mousePos.x, mousePos.y, iconX, iconY);
    const threshold = 200;
    const closeThreshold = 80;
    
    // Carré directement sous le curseur : scale maximal
    if (distance <= closeThreshold) return 1.15;
    
    // Carrés adjacents : scale élevé
    if (distance <= threshold) {
      const baseScale = 0.95;
      const additionalScale = (1.15 - baseScale) * (1 - (distance - closeThreshold) / (threshold - closeThreshold));
      return baseScale + additionalScale;
    }
    
    // Carrés lointains : scale réduit
    return 0.7;
  };

  return (
    <div className="tech-stack-absolute-container">
      {icons.map((icon) => {
        const IconComponent = icon.icon;
        const opacity = getOpacity(icon.x, icon.y);
        const scale = getScale(icon.x, icon.y);
        
        return (
          <div
            key={icon.id}
            className="tech-stack-absolute-item"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              backgroundColor: icon.bg,
            }}
          >
            <IconComponent size={64} style={{ color: icon.color }} />
          </div>
        );
      })}
      
      <div className="tech-stack-hint-absolute">
        Déplacez votre souris pour révéler les icônes
      </div>
    </div>
  );
}
