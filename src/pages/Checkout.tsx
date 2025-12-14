import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  const orderSummary = {
    items: 2,
    subtotal: 339.98,
    shipping: 0,
    total: 339.98,
  };

  return (
    <>
      <Hero title="Finaliser la commande" size="small" />

      <Section background="white">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-tech-blue text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Informations de contact
                </h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-tech-blue text-white flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Adresse de livraison
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Code postal
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Ville
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-tech-blue text-white flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Mode de paiement
                </h2>

                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-tech-blue rounded-xl cursor-pointer bg-tech-blue/5">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      defaultChecked
                      className="w-5 h-5 text-tech-blue"
                    />
                    <span className="ml-3 font-medium">Carte bancaire</span>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      className="w-5 h-5 text-tech-blue"
                    />
                    <span className="ml-3 font-medium">PayPal</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Récapitulatif</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>{orderSummary.items} articles</span>
                    <span className="font-medium">{orderSummary.subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Livraison</span>
                    <span className="font-medium text-green-600">Gratuite</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total</span>
                  <span className="text-tech-blue">{orderSummary.total.toFixed(2)} €</span>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Confirmer la commande
                </Button>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="check" size="sm" className="text-tech-blue" />
                    <span>Paiement sécurisé SSL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size="sm" className="text-tech-blue" />
                    <span>Données protégées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Section>
    </>
  );
};

export default Checkout;
