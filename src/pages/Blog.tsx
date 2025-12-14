import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import { ArticleCard } from '../components/ui/Card';
import Filter from '../components/ui/Filter';
import Pagination from '../components/ui/Pagination';
import { articles, categories } from '../data/articles';

const ARTICLES_PER_PAGE = 6;

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = activeCategory === 'Tous'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Hero
        title="Blog Science IMJM"
        description="Découvrez nos articles sur la science, la technologie et l'innovation"
        size="small"
      />

      <Section background="white">
        <div className="mb-8">
          <Filter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {displayedArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((article) => (
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

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              Aucun article trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </Section>
    </>
  );
};

export default Blog;
