import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { products } from '../data/products';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 100 ? 0 : 9.90;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <>
        <Hero title="Panier" size="small" />
        <Section background="white">
          <div className="text-center py-16">
            <Icon name="cart" size="xl" className="text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
            <p className="text-gray-600 mb-8">
              Découvrez nos produits et ajoutez-les à votre panier
            </p>
            <Button href="/shop" variant="primary" size="lg">
              Découvrir la boutique
            </Button>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Hero title="Panier" size="small" />

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                      onClick={() => navigate(`/product/${item.id}`)}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3
                        className="font-semibold text-lg cursor-pointer hover:text-tech-blue transition-colors"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Supprimer"
                      >
                        <Icon name="close" size="sm" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{item.category}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-50 transition-colors"
                          aria-label="Diminuer"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 border-x border-gray-200 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-50 transition-colors"
                          aria-label="Augmenter"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xl font-bold text-tech-blue">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Résumé de la commande</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} €`}
                  </span>
                </div>
                {subtotal < 100 && (
                  <div className="text-sm text-accent-orange bg-accent-orange/10 rounded-lg p-3">
                    Ajoutez {(100 - subtotal).toFixed(2)} € pour la livraison gratuite
                  </div>
                )}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-tech-blue">{total.toFixed(2)} €</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate('/checkout')}
                variant="primary"
                size="lg"
                className="w-full mb-4"
              >
                Passer la commande
              </Button>

              <Button
                onClick={() => navigate('/shop')}
                variant="outline"
                size="md"
                className="w-full"
              >
                Continuer mes achats
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" className="text-tech-blue" />
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" className="text-tech-blue" />
                  <span>Livraison rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" className="text-tech-blue" />
                  <span>Retour sous 14 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Cart;
