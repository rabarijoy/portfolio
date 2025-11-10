import { Section } from '../ui/Section';

export function Watch() {
  return (
    <Section id="watch" background="white" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <h2 className="font-helvetica font-bold text-[36px] lg:text-[42px] tracking-[-0.02em] text-black mb-6">
          Ma veille informationnelle
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <h3 className="font-helvetica font-bold text-[22px] lg:text-[26px] text-black mb-3">Intelligence Artificielle (IA)</h3>
            <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800 mb-2">
              Suivi des avancées en modèles de langage, agents et outils de productivité.
            </p>
            <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800 mb-2">
              Expérimentations autour de l’intégration IA dans des applications web.
            </p>
            <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Analyse des impacts sur les workflows de développement et le prototypage.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <h3 className="font-helvetica font-bold text-[22px] lg:text-[26px] text-black mb-3">Cybersécurité</h3>
            <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800 mb-2">
              Veille sur les vulnérabilités courantes (OWASP), durcissement et bonnes pratiques.
            </p>
            <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800 mb-2">
              Sécurité applicative côté front/back, gestion secrets et authentification.
            </p>
            <p className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Outillage de scans, audit de dépendances et politiques de déploiement.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
