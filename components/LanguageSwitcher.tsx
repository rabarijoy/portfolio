'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  if (mobile) {
    return (
      <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-2 font-helvetica">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage('fr')}
          className={`flex-1 px-6 py-3 rounded-lg text-[16px] font-medium transition-all ${
            currentLocale === 'fr'
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 active:bg-gray-200'
          }`}
        >
          Français
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage('en')}
          className={`flex-1 px-6 py-3 rounded-lg text-[16px] font-medium transition-all ${
            currentLocale === 'en'
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 active:bg-gray-200'
          }`}
        >
          English
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 font-helvetica">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage('fr')}
        className={`px-2 py-1 rounded text-[13px] font-medium transition-all ${
          currentLocale === 'fr'
            ? 'text-black'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        FR
      </motion.button>
      <span className="text-gray-300 text-[12px]">/</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded text-[13px] font-medium transition-all ${
          currentLocale === 'en'
            ? 'text-black'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        EN
      </motion.button>
    </div>
  );
}

