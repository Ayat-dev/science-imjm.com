import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import { ProductCard } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { articles } from '../data/articles';
import { products } from '../data/products';
import type { Article as ArticleType } from '../types';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === id);
    setArticle(foundArticle || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <Section background="white">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <Button href="/blog" variant="primary">
            Retour au blog
          </Button>
        </div>
      </Section>
    );
  }

  const relatedProducts = products.slice(0, 3);

  return (
    <>
      <div className="relative py-16 md:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-6">
            <span className="px-4 py-2 bg-tech-blue text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="font-medium">{article.author}</span>
            <span>•</span>
            <time>{new Date(article.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
            {article.readTime && (
              <>
                <span>•</span>
                <span>{article.readTime} de lecture</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative -mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-soft-lg mb-16">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-soft p-6">
                <h3 className="font-semibold mb-4">Table des matières</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#content" className="block text-gray-600 hover:text-tech-blue transition-colors">
                    Introduction
                  </a>
                  <a href="#content" className="block text-gray-600 hover:text-tech-blue transition-colors">
                    Applications concrètes
                  </a>
                  <a href="#content" className="block text-gray-600 hover:text-tech-blue transition-colors">
                    Le saviez-vous ?
                  </a>
                  <a href="#content" className="block text-gray-600 hover:text-tech-blue transition-colors">
                    Perspectives futures
                  </a>
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-sm">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <article id="content" className="flex-1">
              <div className="prose prose-lg max-w-none">
                {article.content?.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.includes('Le saviez-vous')) {
                    return (
                      <div key={index} className="bg-tech-blue/5 border-l-4 border-tech-blue rounded-r-xl p-6 my-8">
                        <h3 className="text-xl font-bold text-tech-blue mb-3 flex items-center">
                          💡 Le saviez-vous ?
                        </h3>
                        <p className="text-gray-700 leading-relaxed m-0">
                          {paragraph.split('\n').slice(1).join(' ')}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Écrit par</p>
                    <p className="font-semibold">{article.author}</p>
                  </div>
                  <Button href="/blog" variant="outline">
                    Lire un autre article
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {relatedProducts.length > 0 && (
        <Section background="gradient">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Produits recommandés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
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
        </Section>
      )}
    </>
  );
};

export default Article;
