import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import { ProductCard } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { products } from '../data/products';
import type { Product as ProductType } from '../types';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <Section background="white">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
          <Button href="/shop" variant="primary">
            Retour à la boutique
          </Button>
        </div>
      </Section>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    alert(`${quantity} × ${product.name} ajouté au panier !`);
  };

  return (
    <>
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-soft">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <span className="text-4xl font-bold text-tech-blue">
                {product.price.toFixed(2)} €
              </span>
              {product.inStock ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  En stock
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                  Rupture de stock
                </span>
              )}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {product.shortDescription || product.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <label htmlFor="quantity" className="font-medium">
                Quantité :
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  aria-label="Diminuer"
                >
                  −
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x border-gray-200 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="lg"
                className="flex-1"
              >
                <Icon name="cart" size="sm" className="mr-2" />
                Ajouter au panier
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Acheter maintenant
              </Button>
            </div>

            <div className="bg-gradient-soft rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Icon name="check" size="sm" className="text-tech-blue" />
                <span>Livraison gratuite dès 100€</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="check" size="sm" className="text-tech-blue" />
                <span>Retour sous 14 jours</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="check" size="sm" className="text-tech-blue" />
                <span>Paiement sécurisé</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === 'description'
                    ? 'text-tech-blue'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Description
                {activeTab === 'description' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-blue"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-4 font-medium transition-colors relative ${
                  activeTab === 'specs'
                    ? 'text-tech-blue'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Caractéristiques
                {activeTab === 'specs' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-blue"></span>
                )}
              </button>
            </div>
          </div>

          {activeTab === 'description' ? (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specs &&
                    Object.entries(product.specs).map(([key, value], index) => (
                      <tr
                        key={key}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 w-1/3">
                          {key}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{value}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Section>

      {relatedProducts.length > 0 && (
        <Section background="gradient">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Produits similaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
        </Section>
      )}
    </>
  );
};

export default Product;
