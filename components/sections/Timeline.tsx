'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';

interface TimelineItemData {
  title: string;
  date: string;
  description: string;
}

export function Timeline() {
  const t = useTranslations('timeline');
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressHeight, setProgressHeight] = useState('0px');
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItemData[] = [
    {
      title: t('bac.title'),
      date: t('bac.date'),
      description: t('bac.description'),
    },
    {
      title: t('bts.title'),
      date: t('bts.date'),
      description: t('bts.description'),
    },
    {
      title: t('audio.title'),
      date: t('audio.date'),
      description: t('audio.description'),
    },
    {
      title: t('stage1.title'),
      date: t('stage1.date'),
      description: t('stage1.description'),
    },
    {
      title: t('stage2.title'),
      date: t('stage2.date'),
      description: t('stage2.description'),
    },
  ];

  const handleItemClick = (index: number) => {
    const item = itemRefs.current[index];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const updateTimeline = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Find the currently active item
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + scrollY;
        const distanceFromTop = Math.abs(itemTop - (scrollY + windowHeight / 3));

        if (distanceFromTop < closestDistance) {
          closestDistance = distanceFromTop;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);

      // Update progress bar to reach exactly the active dot
      if (itemRefs.current[0] && itemRefs.current[closestIndex]) {
        const firstItem = itemRefs.current[0];
        const activeItem = itemRefs.current[closestIndex];
        
        // Dots are positioned at top: 8px from item top, plus 8px to reach center (radius)
        const dotCenterOffset = 16;
        
        // Get the absolute Y position of each dot's center
        const firstDotCenter = firstItem.getBoundingClientRect().top + scrollY + dotCenterOffset;
        const activeDotCenter = activeItem.getBoundingClientRect().top + scrollY + dotCenterOffset;
        
        // Calculate the exact distance in pixels from first dot to active dot
        const distanceToActive = activeDotCenter - firstDotCenter;
        
        setProgressHeight(`${Math.max(distanceToActive, 0)}px`);
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', updateTimeline, { passive: true });
    // Also update on resize
    window.addEventListener('resize', updateTimeline, { passive: true });
    
    updateTimeline(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  return (
    <Section id="timeline" background="white" className="!py-[120px] lg:!py-[140px]">
      <div className="container">
        <div className="timeline-grid">
          {/* Left: Timeline */}
          <div ref={timelineRef} className="timeline-container">
            {/* Timeline line */}
            <div className="timeline-line" />
            
            {/* Progress bar */}
            <div 
              className="timeline-progress"
              style={{ 
                height: progressHeight,
              }}
            />

            {/* Timeline items */}
            {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              onClick={() => handleItemClick(index)}
              className={`timeline-item ${activeIndex === index ? '' : 'timeline-item-inactive'}`}
            >
              {/* Dot */}
              <div
                className={`timeline-dot ${
                  activeIndex === index ? 'timeline-dot-active' : ''
                }`}
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className={`timeline-title ${
                    activeIndex === index ? 'timeline-title-active' : ''
                  }`}
                >
                  {item.title}
                </h2>
                
                <p className="timeline-date">
                  {item.date}
                </p>
                
                <p className="timeline-description">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          </div>

          {/* Right: Sticky Image */}
          <div className="timeline-image-wrapper">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="timeline-image"
            >
              <div className="timeline-image-placeholder">
                <div>
                  <div className="timeline-image-label">[Image illustrative]</div>
                  <div className="timeline-image-title">{timelineData[activeIndex]?.title}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </Section>
  );
}

