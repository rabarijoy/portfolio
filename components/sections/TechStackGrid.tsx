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
  isEmpty?: boolean; // Case vide pour compléter la grille
  name?: string; // Nom de la technologie
}

export function TechStackGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gridConfig, setGridConfig] = useState({ cols: 7, rows: 5 });
  const [blinkStates, setBlinkStates] = useState<Record<number, boolean>>({});
  const [isClient, setIsClient] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const updateGrid = () => {
      // Calculer la largeur disponible exacte du container (même que section projets)
      const screenWidth = window.innerWidth;
      const containerMaxWidth = 1280;
      const containerPadding = screenWidth >= 1024 ? 40 : 20; // Même padding que .container
      
      // Largeur disponible = min(screenWidth, containerMaxWidth) - 2 * padding
      const availableWidth = Math.min(screenWidth, containerMaxWidth) - (2 * containerPadding);
      
      // Calculer le nombre de colonnes pour remplir exactement cet espace
      // gap = 10 (fixe), cellSize sera calculé après
      // On veut maximiser le nombre de colonnes tout en gardant un cellSize raisonnable
      // Formule: availableWidth = cols * cellSize + (cols - 1) * gap
      // On itère pour trouver le meilleur nombre de colonnes
      const gap = 10; // Écart fixe entre les carrés
      const minCellSize = 60; // Taille minimale acceptable
      const maxCellSize = 150; // Taille maximale acceptable
      
      let bestCols = 5;
      let bestCellSize = 0;
      
      // Tester différentes valeurs de colonnes pour trouver la meilleure
      for (let testCols = 5; testCols <= 15; testCols++) {
        const totalGapSpace = gap * (testCols - 1);
        const testCellSize = (availableWidth - totalGapSpace) / testCols;
        
        if (testCellSize >= minCellSize && testCellSize <= maxCellSize) {
          if (testCellSize > bestCellSize) {
            bestCellSize = testCellSize;
            bestCols = testCols;
          }
        }
      }
      
      const cols = bestCols;
      const rows = Math.ceil(35 / cols);
      
      setGridConfig({ cols, rows });
    };

    // Gérer la visibilité de la page pour réinitialiser l'état
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page cachée : réinitialiser l'état
        setHoveredIconId(null);
        setMousePos({ x: 0, y: 0 });
      } else {
        // Page visible : réinitialiser et mettre à jour la grille
        setHoveredIconId(null);
        updateGrid();
      }
    };

    // Gérer le focus de la fenêtre
    const handleWindowFocus = () => {
      setHoveredIconId(null);
      updateGrid();
    };

    updateGrid();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateGrid);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateGrid);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
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

  // Technologies avec leurs couleurs officielles et noms
  const techList = [
    { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
    { icon: SiCss3, color: '#1572B6', name: 'CSS3' },
    { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { icon: SiPhp, color: '#777BB4', name: 'PHP' },
    { icon: Database, color: '#336791', name: 'SQL' },
    { icon: Code2, color: '#ED8B00', name: 'Java' },
    { icon: Code2, color: '#239120', name: 'C#' },
    { icon: SiReact, color: '#61DAFB', name: 'React' },
    { icon: SiSymfony, color: '#000000', name: 'Symfony' },
    { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
    { icon: Code2, color: '#8BC0D0', name: 'Alpine.js' },
    { icon: Flame, color: '#FD4F00', name: 'Phoenix Framework' },
    { icon: Flame, color: '#FD4F00', name: 'Phoenix LiveView' },
    { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
    { icon: SiSqlite, color: '#003B57', name: 'SQLite' },
    { icon: SiClickhouse, color: '#FFCC02', name: 'ClickHouse' },
    { icon: SiGit, color: '#F05032', name: 'Git' },
    { icon: SiGithub, color: '#181717', name: 'GitHub' },
    { icon: SiGitlab, color: '#FC6D26', name: 'GitLab' },
    { icon: SiNpm, color: '#CB3837', name: 'npm' },
    { icon: SiDocker, color: '#2496ED', name: 'Docker' },
    { icon: Box, color: '#3B82F6', name: 'Lando' },
    { icon: SiWordpress, color: '#21759B', name: 'WordPress' },
    { icon: SiDrupal, color: '#0678BE', name: 'Drupal' },
    { icon: SiWebflow, color: '#4353FF', name: 'Webflow' },
    { icon: Layers, color: '#0055FF', name: 'Framer' },
    { icon: Zap, color: '#FF6B6B', name: 'REST API' },
    { icon: Zap, color: '#4ECDC4', name: 'API Calls' },
    { icon: SiJson, color: '#000000', name: 'JSON' },
    { icon: SiVercel, color: '#000000', name: 'Vercel' },
    { icon: Code2, color: '#000000', name: 'Cursor' },
    { icon: Zap, color: '#000000', name: 'Sonnet' },
    { icon: Zap, color: '#10A37F', name: 'GPT' },
    { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
    { icon: Layers, color: '#E34F26', name: 'UML' },
  ];

  const specialIcons: Record<string, { bg: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string; name: string }> = {
    '0': { bg: '#61DAFB', icon: SiReact, color: '#ffffff', name: 'React' },
    '5': { bg: '#000000', icon: SiSymfony, color: '#ffffff', name: 'Symfony' },
    '10': { bg: '#F05032', icon: SiGit, color: '#ffffff', name: 'Git' },
    '2': { bg: '#06B6D4', icon: SiTailwindcss, color: '#ffffff', name: 'Tailwind CSS' },
    '15': { bg: '#2496ED', icon: SiDocker, color: '#ffffff', name: 'Docker' },
    '8': { bg: '#000000', icon: SiVercel, color: '#ffffff', name: 'Vercel' },
    '20': { bg: '#F24E1E', icon: SiFigma, color: '#ffffff', name: 'Figma' },
    '25': { bg: '#336791', icon: SiPostgresql, color: '#ffffff', name: 'PostgreSQL' },
    '12': { bg: '#E34F26', icon: SiHtml5, color: '#ffffff', name: 'HTML5' },
  };

  const gap = 10; // Écart fixe entre les carrés

  // Calculer la largeur disponible exacte du container (même que section projets)
  // Utiliser une valeur par défaut pour le SSR pour éviter l'hydration mismatch
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const containerMaxWidth = 1280;
  const containerPadding = screenWidth >= 1024 ? 40 : 20; // Même padding que .container
  
  const containerWidth = Math.min(screenWidth, containerMaxWidth) - (2 * containerPadding);
  const totalGapSpace = gap * (gridConfig.cols - 1);
  const availableSpace = containerWidth - totalGapSpace;
  const cellSize = availableSpace / gridConfig.cols;

  // Calculer la hauteur totale de la grille
  const totalGridHeight = gridConfig.rows * cellSize + (gridConfig.rows - 1) * gap;
  // Pas de centrage vertical - la grille commence directement en haut
  const startY = cellSize / 2;

  // Position de départ horizontale : aligner exactement avec le container
  // Le container a max-width: 1280px, margin: 0 auto, padding: 20px/40px
  // Le contenu du container commence à : (screenWidth - min(screenWidth, 1280)) / 2 + padding
  const gridTotalWidth = gridConfig.cols * cellSize + (gridConfig.cols - 1) * gap;
  const containerActualWidth = Math.min(screenWidth, containerMaxWidth);
  const containerLeftEdge = (screenWidth - containerActualWidth) / 2;
  const containerContentLeft = containerLeftEdge + containerPadding;
  const startX = containerContentLeft + gridTotalWidth / 2;

  // Calculer le nombre total de cases nécessaires pour un rectangle parfait
  const totalCells = gridConfig.cols * gridConfig.rows;
  const icons: GridIcon[] = [];
  
  // Créer les cases avec icônes (35 au maximum)
  for (let i = 0; i < 35; i++) {
    const row = Math.floor(i / gridConfig.cols);
    const col = i % gridConfig.cols;
    
    // Vérifier si cette case est dans les limites de la grille
    if (row < gridConfig.rows && col < gridConfig.cols) {
      const special = specialIcons[i.toString()];
      const techIndex = i % techList.length;
      const tech = techList[techIndex];
      
      icons.push({
        id: i,
        x: startX - gridTotalWidth / 2 + col * (cellSize + gap) + cellSize / 2,
        y: row * (cellSize + gap) + cellSize / 2 + startY,
        bg: special?.bg || tech.color,
        icon: special?.icon || tech.icon,
        color: special?.color || '#ffffff',
        name: special?.name || tech.name,
        isEmpty: false,
      });
    }
  }
  
  // Compléter avec des cases vides si nécessaire
  for (let i = 35; i < totalCells; i++) {
    const row = Math.floor(i / gridConfig.cols);
    const col = i % gridConfig.cols;
    
    icons.push({
      id: i,
      x: startX - gridTotalWidth / 2 + col * (cellSize + gap) + cellSize / 2,
      y: row * (cellSize + gap) + cellSize / 2 + startY,
      bg: '#9ca3af', // Gris pour les cases vides
      icon: () => null, // Pas d'icône
      color: '#ffffff',
      isEmpty: true,
    });
  }

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Trouver le carré exactement sous le curseur (le plus proche de la souris)
  const activeIcons = icons.filter(icon => !icon.isEmpty);
  const iconsWithDistanceFromMouse = activeIcons.map(icon => ({
    ...icon,
    distance: getDistance(mousePos.x, mousePos.y, icon.x, icon.y)
  })).sort((a, b) => (a.distance || 0) - (b.distance || 0));

  // Le carré directement sous le curseur (le plus proche de la souris)
  const cursorIcon = iconsWithDistanceFromMouse[0];
  
  // Si on a trouvé un carré sous le curseur, trouver les 5 plus proches de ce carré
  let closestSix = new Set<number>();
  if (cursorIcon) {
    closestSix.add(cursorIcon.id);
    
    // Trouver les 5 autres carrés les plus proches du carré sous le curseur
    const iconsWithDistanceFromCursor = activeIcons
      .filter(icon => icon.id !== cursorIcon.id)
      .map(icon => ({
        ...icon,
        distance: getDistance(cursorIcon.x, cursorIcon.y, icon.x, icon.y)
      }))
      .sort((a, b) => (a.distance || 0) - (b.distance || 0));
    
    // Ajouter les 5 plus proches
    iconsWithDistanceFromCursor.slice(0, 5).forEach(icon => {
      closestSix.add(icon.id);
    });
  }

  const getOpacity = (iconId: number) => {
    return closestSix.has(iconId) ? 1 : 0;
  };

  const getScale = (iconId: number) => {
    return closestSix.has(iconId) ? 1 : 0.8;
  };

  // Ne pas rendre avant que le client soit monté pour éviter l'hydration mismatch
  if (!isClient) {
    return <div className="tech-stack-absolute-container" style={{ minHeight: '500px' }} />;
  }

  return (
    <div className="tech-stack-absolute-container">
      {/* Carrés de fond gris qui clignotent */}
      {icons.map((icon) => {
        // Les cases vides sont toujours visibles et ne clignotent pas
        if (icon.isEmpty) {
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
                opacity: 0.18, // Opacité fixe pour les cases vides
                backgroundColor: '#9ca3af',
                boxShadow: 'none',
                pointerEvents: 'none', // Pas d'interaction
              }}
            />
          );
        }
        
        const isVisible = closestSix.has(icon.id);
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
            onMouseEnter={() => setHoveredIconId(icon.id)}
            onMouseLeave={() => setHoveredIconId(null)}
          />
        );
      })}
      
      {/* Icônes colorées qui apparaissent au hover */}
      {icons.map((icon) => {
        // Les cases vides n'ont pas d'icône colorée
        if (icon.isEmpty) {
          return null;
        }
        
        const isVisible = closestSix.has(icon.id);
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
              pointerEvents: isVisible ? 'auto' : 'none',
            }}
            onMouseEnter={() => setHoveredIconId(icon.id)}
            onMouseLeave={() => setHoveredIconId(null)}
          >
            <IconComponent size={Math.floor(cellSize * 0.4)} style={{ color: icon.color }} />
          </div>
        );
      })}
      
      {/* Tooltip - affiché au-dessus de l'icône survolée */}
      {hoveredIconId !== null && icons[hoveredIconId] && !icons[hoveredIconId].isEmpty && icons[hoveredIconId].name && (
        <div
          className="tech-stack-tooltip"
          style={{
            left: `${icons[hoveredIconId].x}px`,
            top: `${icons[hoveredIconId].y - cellSize / 2 - 12}px`,
          }}
        >
          {icons[hoveredIconId].name}
        </div>
      )}
      
    </div>
  );
}
