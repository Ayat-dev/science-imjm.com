import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import { ProductCard } from '../components/ui/Card';
import Filter from '../components/ui/Filter';
import Pagination from '../components/ui/Pagination';
import { products, productCategories } from '../data/products';

const PRODUCTS_PER_PAGE = 8;

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');

  let filteredProducts = activeCategory === 'Tous'
    ? products
    : products.filter(product => product.category === activeCategory);

  switch (sortBy) {
    case 'price-asc':
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filteredProducts = [...filteredProducts].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Hero
        title="Boutique Science IMJM"
        description="Kits éducatifs, équipements de laboratoire et formations pour tous vos projets scientifiques"
        size="small"
      />

      <Section background="white">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <Filter
              categories={productCategories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Trier par :
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-tech-blue"
            >
              <option value="featured">En vedette</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom A-Z</option>
            </select>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
        </div>

        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayedProducts.map((product) => (
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
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </Section>
    </>
  );
};

export default Shop;
