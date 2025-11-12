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
    <Section id="timeline" background="white" className="!py-[80px] lg:!py-[100px]">
      <div className="max-w-screen-xl mx-auto px-[20px] lg:px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Timeline */}
          <div ref={timelineRef} className="relative pl-[80px] lg:pl-[100px]">
            {/* Timeline line */}
            <div className="absolute left-[20px] lg:left-[30px] top-0 w-[2px] h-full bg-blue-accent/30" />
            
            {/* Progress bar */}
            <div 
              className="absolute left-[20px] lg:left-[30px] top-0 w-[2px] bg-blue-accent"
              style={{ 
                height: progressHeight,
                transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />

            {/* Timeline items */}
            {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              onClick={() => handleItemClick(index)}
              className={`relative mb-[100px] lg:mb-[120px] last:mb-[60px] lg:last:mb-[80px] transition-all duration-600 cursor-pointer ${
                activeIndex === index ? 'opacity-100' : 'opacity-40'
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute -left-[68px] lg:-left-[78px] top-[8px] w-[16px] h-[16px] rounded-full border-[3px] border-white transition-all duration-400 ${
                  activeIndex === index
                    ? 'bg-blue-accent scale-[1.3] shadow-[0_0_0_8px_rgba(109,191,255,0.2)]'
                    : 'bg-gray-neutral'
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
                  className={`font-helvetica font-bold text-[24px] lg:text-[32px] leading-[1.2] tracking-[-0.5px] mb-[8px] lg:mb-[10px] transition-colors duration-400 ${
                    activeIndex === index ? 'text-blue-accent' : 'text-black'
                  }`}
                >
                  {item.title}
                </h2>
                
                <p className="font-helvetica font-normal text-[15px] lg:text-[16px] leading-[1.4] text-gray-neutral mb-[10px] lg:mb-[12px]">
                  {item.date}
                </p>
                
                <p className="font-helvetica font-normal text-[14px] lg:text-[16px] leading-[1.6] text-gray-600 max-w-[550px]">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          </div>

          {/* Right: Sticky Image */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-[4/3] rounded-[20px] bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-helvetica text-center px-8">
                <div>
                  <div className="text-[16px] mb-2">[Image illustrative]</div>
                  <div className="text-[14px] font-bold text-blue-accent">{timelineData[activeIndex]?.title}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

