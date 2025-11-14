interface SectionDividerProps {
  color?: 'black' | 'gray';
}

export function SectionDivider({ color = 'black' }: SectionDividerProps) {
  const getColor = () => {
    if (color === 'black') {
      return 'var(--theme-divider)';
    }
    return 'var(--theme-divider)';
  };
  
  return (
    <div className="px-[4vw] lg:px-[5vw] py-0">
      <div 
        className="w-full h-[5px]"
        style={{
          backgroundColor: getColor(),
          transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  );
}

