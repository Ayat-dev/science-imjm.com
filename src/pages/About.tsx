import React from 'react';
import Hero from '../components/ui/Hero';
import Section, { SectionHeader } from '../components/ui/Section';
import { IconCard } from '../components/ui/Icon';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const values = [
    {
      icon: 'innovation',
      title: 'Innovation',
      description: 'Nous valorisons la créativité et l\'innovation dans chaque aspect de notre travail scientifique.'
    },
    {
      icon: 'education',
      title: 'Accessibilité',
      description: 'Rendre la science accessible à tous, quel que soit le niveau de connaissance initial.'
    },
    {
      icon: 'science',
      title: 'Rigueur',
      description: 'Maintenir les plus hauts standards de précision et d\'exactitude scientifique.'
    },
  ];

  const activities = [
    {
      icon: 'education',
      title: 'Articles de vulgarisation',
      description: 'Des contenus riches et accessibles sur les dernières découvertes scientifiques et technologiques.'
    },
    {
      icon: 'cart',
      title: 'Produits tech',
      description: 'Une sélection de kits éducatifs, équipements de laboratoire et formations en ligne.'
    },
    {
      icon: 'innovation',
      title: 'Projets éducatifs',
      description: 'Des tutoriels et projets pratiques pour expérimenter et apprendre par la pratique.'
    },
    {
      icon: 'science',
      title: 'Expériences',
      description: 'Des expériences scientifiques détaillées avec protocoles et explications complètes.'
    },
  ];

  return (
    <>
      <Hero
        title="Science IMJM : Explorer, Innover, Partager"
        description="Notre mission est de rendre la science moderne accessible et passionnante pour tous, à travers des contenus de qualité et des produits éducatifs innovants."
        size="medium"
        image="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <Section background="white">
        <SectionHeader
          title="Notre Mission"
          subtitle="Démocratiser l'accès à la connaissance scientifique"
        />

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Science IMJM est né d'une passion commune pour la science et d'une conviction profonde :
              la connaissance scientifique doit être accessible à tous, sans barrières de langage ou de complexité.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Nous croyons que chaque personne, qu'elle soit étudiante, professionnelle ou simplement curieuse,
              mérite d'avoir accès à des contenus scientifiques de qualité, expliqués de manière claire et engageante.
            </p>
            <p className="text-lg leading-relaxed">
              Notre approche combine vulgarisation scientifique rigoureuse, projets pratiques et une sélection
              de produits éducatifs pour permettre à chacun d'explorer, d'apprendre et d'innover.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <SectionHeader
          title="Nos Valeurs"
          subtitle="Les principes qui guident notre action"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <IconCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeader
          title="Ce que nous faisons"
          subtitle="Nos domaines d'activité"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <IconCard
              key={index}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez nos contenus, participez à nos projets et restez informé
            des dernières avancées scientifiques et technologiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/blog" variant="primary" size="lg">
              Explorer nos contenus
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
