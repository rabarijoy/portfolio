'use client';

export function Footer() {

  return (
    <footer className="relative mt-8 pt-6 pb-32 md:pb-40 border-t border-gray-800 font-helvetica overflow-visible">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4 text-center md:text-left text-[14px] md:text-[15px] text-gray-800">
          <div className="flex items-center gap-2">
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-800" />
            <a 
              href="mailto:rabarijaonajoy@gmail.com" 
              className="hover:text-blue-accent transition-colors"
            >
              rabarijaonajoy@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-800" />
            <a 
              href="tel:+261343260892" 
              className="hover:text-blue-accent transition-colors"
            >
              +261 34 32 608 92
            </a>
          </div>
        </div>
      </div>

      {/* Ellipse bleue floue en bas */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[140px] md:h-[180px] bg-blue-accent rounded-full transform translate-y-[80%] blur-[100px] z-[-1] will-change-[filter] overflow-visible"
        style={{ borderRadius: '100%' }}
      />
    </footer>
  );
}

