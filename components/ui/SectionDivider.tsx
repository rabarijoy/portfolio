interface SectionDividerProps {
  color?: 'black' | 'gray';
}

export function SectionDivider({ color = 'black' }: SectionDividerProps) {
  const bgColor = color === 'black' ? 'bg-black' : 'bg-gray-300';
  
  return (
    <div className="px-[4vw] lg:px-[5vw] py-0">
      <div className={`w-full h-[5px] ${bgColor}`} />
    </div>
  );
}

