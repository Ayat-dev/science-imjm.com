import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Section, { SectionHeader } from '../components/ui/Section';
import { ArticleCard, ProductCard, ProjectCard } from '../components/ui/Card';
import { IconCard } from '../components/ui/Icon';
import Newsletter from '../components/ui/Newsletter';
import Button from '../components/ui/Button';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const featuredArticles = articles.slice(0, 3);
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <>
      <Hero
        title="La science moderne, accessible et vivante."
        description="Articles, projets et produits pour comprendre l'innovation."
        primaryCTA={{ text: 'Voir les articles', href: '/blog' }}
        secondaryCTA={{ text: 'Explorer la boutique', href: '/shop' }}
        image="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200"
        size="large"
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bienvenue chez Science IMJM
          </h2>
          <p className="text-lg text-gray-600">
            Nous rendons la science accessible à tous à travers des contenus de qualité,
            des projets innovants et des produits éducatifs soigneusement sélectionnés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IconCard
            icon="innovation"
            title="Innovation"
            description="Découvrez les dernières avancées technologiques et scientifiques"
          />
          <IconCard
            icon="tech"
            title="Technologie"
            description="Explorez les technologies qui façonnent notre futur"
          />
          <IconCard
            icon="science"
            title="Science"
            description="Comprenez les principes fondamentaux de notre univers"
          />
          <IconCard
            icon="education"
            title="Vulgarisation"
            description="Apprenez les concepts complexes de manière simple"
          />
        </div>
      </Section>

      <Section background="gradient" id="projects">
        <SectionHeader
          title="Nos Derniers Projets"
          subtitle="Explorez nos réalisations scientifiques et techniques"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              onClick={() => navigate(`/project/${project.id}`)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button href="/blog" variant="outline" size="lg">
            Voir toutes les réalisations
          </Button>
        </div>
      </Section>

      <Section background="white">
        <SectionHeader
          title="Articles Récents"
          subtitle="Restez informé des dernières découvertes et innovations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              date={article.date}
              image={article.image}
              readTime={article.readTime}
              onClick={() => navigate(`/article/${article.id}`)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button href="/blog" variant="primary" size="lg">
            Voir tous les articles
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          title="Produits Recommandés"
          subtitle="Kits, équipements et formations pour vos projets scientifiques"
        />

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                inStock={product.inStock}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/shop" variant="secondary" size="lg">
            Explorer la boutique
          </Button>
        </div>
      </Section>

      <Section background="white" id="newsletter">
        <Newsletter />
      </Section>
    </>
  );
};

export default Home;
