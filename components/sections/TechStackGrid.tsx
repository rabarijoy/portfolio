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
  id: number;
  x: number;
  y: number;
  bg: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  distance?: number;
}

export function TechStackGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gridConfig, setGridConfig] = useState({ cols: 7, rows: 5 });
  const [blinkStates, setBlinkStates] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const updateGrid = () => {
      const width = window.innerWidth - 80; // 40px padding de chaque côté
      const height = window.innerHeight;
      
      // Calculer le nombre de colonnes optimal
      const minCellSize = 80;
      const maxCellSize = 120;
      
      let cols = Math.floor(width / maxCellSize);
      cols = Math.max(5, Math.min(cols, 10)); // Entre 5 et 10 colonnes
      
      const rows = Math.ceil(35 / cols);
      
      setGridConfig({ cols, rows });
    };

    updateGrid();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateGrid);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateGrid);
    };
  }, []);

  // Gérer le clignotement aléatoire avec effet ripple
  useEffect(() => {
    const triggerRipple = (startIndex: number) => {
      const visited = new Set<number>();
      const queue: Array<{index: number, delay: number}> = [{index: startIndex, delay: 0}];
      
      while (queue.length > 0) {
        const {index, delay} = queue.shift()!;
        
        if (visited.has(index) || index < 0 || index >= 35) continue;
        visited.add(index);
        
        setTimeout(() => {
          setBlinkStates(prev => ({
            ...prev,
            [index]: true
          }));
          
          setTimeout(() => {
            setBlinkStates(prev => ({
              ...prev,
              [index]: false
            }));
          }, 250);
        }, delay);
        
        // Ajouter les voisins avec un délai
        const row = Math.floor(index / gridConfig.cols);
        const col = index % gridConfig.cols;
        
        const neighbors = [
          index - 1, // gauche
          index + 1, // droite
          index - gridConfig.cols, // haut
          index + gridConfig.cols, // bas
        ];
        
        neighbors.forEach(neighbor => {
          const neighborRow = Math.floor(neighbor / gridConfig.cols);
          const neighborCol = neighbor % gridConfig.cols;
          
          // Vérifier que c'est bien un voisin adjacent
          if (Math.abs(neighborRow - row) + Math.abs(neighborCol - col) === 1) {
            if (!visited.has(neighbor) && neighbor >= 0 && neighbor < 35) {
              queue.push({index: neighbor, delay: delay + 60});
            }
          }
        });
      }
    };
    
    const interval = setInterval(() => {
      const randomStart = Math.floor(Math.random() * 35);
      triggerRipple(randomStart);
    }, 4000); // Démarrer une nouvelle vague toutes les 4 secondes
    
    // Démarrer une première vague après un délai aléatoire
    setTimeout(() => {
      triggerRipple(Math.floor(Math.random() * 35));
    }, Math.random() * 2000);
    
    return () => clearInterval(interval);
  }, [gridConfig.cols]);

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
    '0': { bg: '#61DAFB', icon: SiReact, color: '#ffffff' },
    '5': { bg: '#000000', icon: SiSymfony, color: '#ffffff' },
    '10': { bg: '#F05032', icon: SiGit, color: '#ffffff' },
    '2': { bg: '#06B6D4', icon: SiTailwindcss, color: '#ffffff' },
    '15': { bg: '#2496ED', icon: SiDocker, color: '#ffffff' },
    '8': { bg: '#000000', icon: SiVercel, color: '#ffffff' },
    '20': { bg: '#F24E1E', icon: SiFigma, color: '#ffffff' },
    '25': { bg: '#336791', icon: SiPostgresql, color: '#ffffff' },
    '12': { bg: '#E34F26', icon: SiHtml5, color: '#ffffff' },
  };

  const gap = 10; // Écart fixe entre les carrés

  const containerWidth = typeof window !== 'undefined' ? window.innerWidth - 80 : 1200;
  const totalGapSpace = gap * (gridConfig.cols - 1);
  const availableSpace = containerWidth - totalGapSpace;
  const cellSize = availableSpace / gridConfig.cols;

  // Calculer la hauteur totale de la grille
  const totalGridHeight = gridConfig.rows * cellSize + (gridConfig.rows - 1) * gap;
  const startY = typeof window !== 'undefined' ? (window.innerHeight - totalGridHeight) / 2 : 400;

  const icons: GridIcon[] = [];
  for (let i = 0; i < 35; i++) {
    const row = Math.floor(i / gridConfig.cols);
    const col = i % gridConfig.cols;
    const special = specialIcons[i.toString()];
    const techIndex = i % techList.length;
    const tech = techList[techIndex];

    icons.push({
      id: i,
      x: col * (cellSize + gap) + cellSize / 2 + 40,
      y: row * (cellSize + gap) + cellSize / 2 + startY,
      bg: special?.bg || tech.color,
      icon: special?.icon || tech.icon,
      color: special?.color || '#ffffff',
    });
  }

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Calculer les distances et trier pour trouver les 5 plus proches
  const iconsWithDistance = icons.map(icon => ({
    ...icon,
    distance: getDistance(mousePos.x, mousePos.y, icon.x, icon.y)
  })).sort((a, b) => (a.distance || 0) - (b.distance || 0));

  const closestFive = new Set(iconsWithDistance.slice(0, 5).map(icon => icon.id));

  const getOpacity = (iconId: number) => {
    return closestFive.has(iconId) ? 1 : 0;
  };

  const getScale = (iconId: number) => {
    return closestFive.has(iconId) ? 1 : 0.8;
  };

  return (
    <div className="tech-stack-absolute-container">
      {/* Carrés de fond gris qui clignotent */}
      {icons.map((icon) => {
        const isVisible = closestFive.has(icon.id);
        const isBlink = blinkStates[icon.id];
        
        return (
          <div
            key={`bg-${icon.id}`}
            className="tech-stack-background-square"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              transform: 'translate(-50%, -50%)',
              opacity: isVisible ? 0 : (isBlink ? 0.4 : 0.18),
              backgroundColor: '#9ca3af',
              boxShadow: isBlink ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
            }}
          />
        );
      })}
      
      {/* Icônes colorées qui apparaissent au hover */}
      {icons.map((icon) => {
        const isVisible = closestFive.has(icon.id);
        const opacity = isVisible ? 1 : 0;
        const scale = isVisible ? 1 : 0.8;
        const IconComponent = icon.icon;
        
        return (
          <div
            key={icon.id}
            className="tech-stack-absolute-item"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              backgroundColor: icon.bg,
            }}
          >
            <IconComponent size={Math.floor(cellSize * 0.4)} style={{ color: icon.color }} />
          </div>
        );
      })}
      
      <div className="tech-stack-hint-absolute">
        Déplacez votre souris pour révéler les icônes
      </div>
    </div>
  );
}
