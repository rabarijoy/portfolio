import { Section } from '../ui/Section';

export function Skills() {
  return (
    <Section id="skills" background="white" className="py-[80px]">
      <div className="max-w-screen-2xl mx-auto px-[6vw] lg:px-[7vw]">
        <h2 className="font-helvetica font-bold text-[36px] lg:text-[42px] tracking-[-0.02em] text-black mb-6">
          Mes compétences
        </h2>
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
          <ul className="space-y-3 list-disc pl-6">
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Maîtrise des langages de programmation : C#, PHP, HTML, CSS, JavaScript, Java, Python
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Développement d’applications web, mobiles et client/serveur
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Gestion de bases de données : MySQL, PostgreSQL, MongoDB
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Application des bonnes pratiques de qualité logicielle (KISS, DRY, SOLID)
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Réalisation de tests unitaires et fonctionnels
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Analyse de code
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Conception avec Merise, UML
            </li>
            <li className="font-helvetica text-[15px] lg:text-[17px] leading-[1.7] text-gray-800">
              Travail collaboratif avec GitHub
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
